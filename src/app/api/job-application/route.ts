import nodemailer from "nodemailer";

export async function POST(req: Request) {
  // Get the FormData from the request
  const formData = await req.formData();

  const cv = formData.get("cv") as File;
  const email = formData.get("email") as string;
  const firstName = formData.get("firstName") as string;
  const senderEmail = formData.get("senderEmail") as string;
  const senderPassword = formData.get("senderPassword") as string;
  const receiverEmail = formData.get("receiverEmail") as string;

  // Validate required fields
  if (
    !cv ||
    !email ||
    !firstName ||
    !senderEmail ||
    !senderPassword ||
    !receiverEmail
  ) {
    return new Response(
      JSON.stringify({
        message:
          "CV, applicant email, applicant name, status, sender email, password, and receiver email are required.",
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

  // Set up the email options for the receiver
  const mailOptionsToReceiver = {
    from: senderEmail,
    to: receiverEmail,
    subject: "New Job Application Received",
    text: `A new job application has been submitted by ${firstName}.`,
    attachments: [
      {
        filename: cv.name, // Use the original filename
        content: cvBufferData, // Send the CV file as an attachment
      },
    ],
  };

  // Set up the email options for the applicant
  const mailOptionsToApplicant = {
    from: senderEmail,
    to: email,
    subject: `Application Status Update`,
    html: `
      <p>Dear ${firstName},</p>
      <p>We wanted to inform you that your application status is received.</p>
      <p>Thank you for your interest in our company!</p>
      <p>Best regards,<br>The Team</p>
    `,
  };

  // Send emails
  try {
    await transporter.sendMail(mailOptionsToReceiver);
    await transporter.sendMail(mailOptionsToApplicant);
    return new Response(
      JSON.stringify({ message: "Emails sent successfully." }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email." }), {
      status: 500,
    });
  }
}
