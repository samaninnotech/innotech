import nodemailer from "nodemailer";

export async function POST(req: Request) {
  // Parse the incoming JSON request body
  const { email, firstName, status, senderEmail, senderPassword } =
    await req.json();
  // Validate required fields
  if (!email || !senderEmail || !senderPassword) {
    return new Response(
      JSON.stringify({
        message:
          "Applicant email, applicant name, status, sender email, and password are required.",
      }),
      {
        status: 400,
      },
    );
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
    to: email,
    subject: `Application Status Update`,
    text: `Dear ${firstName},\n\nWe wanted to inform you that your application status is now: ${status}.\n\nThank you for your interest in our company!\n\nBest regards,\nThe Team`,
    html: `
      <p>Dear ${firstName},</p>
      <p>We wanted to inform you that your application status is now: <strong>${status}</strong>.</p>
      <p>Thank you for your interest in our company!</p>
      <p>Best regards,<br>The Team</p>
    `,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({
        message: "Notification email sent to applicant successfully!",
      }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending notification email to applicant:", error);
    return new Response(JSON.stringify({ message: "Error sending email." }), {
      status: 500,
    });
  }
}
