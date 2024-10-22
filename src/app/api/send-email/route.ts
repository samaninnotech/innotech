import fetch from "node-fetch";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email, brochureUrl, senderEmail, senderPassword } = await req.json();
  if (!email || !brochureUrl || !senderEmail || !senderPassword) {
    return new Response(
      JSON.stringify({
        message:
          "Email, brochure URL, sender email, and password are required.",
      }),
      {
        status: 400,
      },
    );
  }

  let brochureBuffer: Buffer;
  try {
    const response = await fetch(brochureUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch brochure: ${response.statusText}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    brochureBuffer = Buffer.from(arrayBuffer);
  } catch (error) {
    console.error("Error fetching brochure:", error);
    return new Response(
      JSON.stringify({ message: "Error fetching brochure." }),
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: senderEmail,
      pass: senderPassword,
    },
  });

  const mailOptions = {
    from: senderEmail,
    to: email,
    subject: "Your Requested Brochure",
    text: `Here is the link to your brochure: ${brochureUrl}`,
    html: `<p>Here is the link to your brochure: <a href="${brochureUrl}">${brochureUrl}</a></p>`,
    attachments: [
      {
        filename: "brochure.pdf",
        content: brochureBuffer,
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email." }), {
      status: 500,
    });
  }
}
