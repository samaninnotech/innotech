import fetch from "node-fetch";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  // Parse the incoming JSON request body
  const { cv, receiverEmail, senderEmail, senderPassword } = await req.json();
  console.log(cv, "hghg");
  // Validate required fields
  if (!cv || !receiverEmail || !senderEmail || !senderPassword) {
    return new Response(
      JSON.stringify({
        message:
          "CV URL, receiver email, sender email, and password are required.",
      }),
      {
        status: 400,
      },
    );
  }

  let cvBuffer: Buffer;
  try {
    // Fetch the CV from the provided URL
    const response = await fetch(cv);
    if (!response.ok) {
      throw new Error(`Failed to fetch CV: ${response.statusText}`);
    }

    // Convert the fetched CV to a Buffer
    const arrayBuffer = await response.arrayBuffer();
    cvBuffer = Buffer.from(arrayBuffer);
  } catch (error) {
    console.error("Error fetching CV:", error);
    return new Response(JSON.stringify({ message: "Error fetching CV." }), {
      status: 500,
    });
  }

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
    text: `A new job application has been received. The CV is attached.`,
    attachments: [
      {
        filename: "application_cv.pdf", // You can set the filename based on your requirements
        content: cvBuffer,
      },
    ],
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Notification email sent successfully!" }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending notification email:", error);
    return new Response(JSON.stringify({ message: "Error sending email." }), {
      status: 500,
    });
  }
}
