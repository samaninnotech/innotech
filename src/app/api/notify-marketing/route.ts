import nodemailer from "nodemailer";

export async function POST(req: Request) {
  // Get the FormData from the request
  const formData = await req.formData();
  const cv = formData.get("cv") as File; // 'cv' field in FormData
  const receiverEmail = formData.get("receiverEmail") as string;
  const senderEmail = formData.get("senderEmail") as string;
  const senderPassword = formData.get("senderPassword") as string;

  // Validate required fields
  if (!cv || !receiverEmail || !senderEmail || !senderPassword) {
    return new Response(
      JSON.stringify({
        message: "CV, receiver email, sender email, and password are required.",
      }),
      { status: 400 },
    );
  }

  // Convert the file to a buffer
  const cvBuffer = await cv.arrayBuffer();
  const cvBufferData = Buffer.from(cvBuffer);

  // Create a transporter for sending emails
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: senderEmail,
      pass: senderPassword,
    },
  });

  // Set up the email options
  const mailOptions = {
    from: senderEmail,
    to: receiverEmail,
    subject: "New Job Application Received",
    text: `A new job application has been submitted.`,
    attachments: [
      {
        filename: cv.name, // use the original filename
        content: cvBufferData, // send the CV file as an attachment
      },
    ],
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully." }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email." }), {
      status: 500,
    });
  }
}
