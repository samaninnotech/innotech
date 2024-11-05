import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const {
    email,
    firstName,
    lastName,
    senderEmail,
    senderPassword,
    receiverEmail,
  } = await req.json();

  if (
    !email ||
    !firstName ||
    !lastName ||
    !senderEmail ||
    !senderPassword ||
    !receiverEmail
  ) {
    return new Response(
      JSON.stringify({
        message:
          "Applicant email, first name, last name, sender email, sender password, and receiver email are required.",
      }),
      {
        status: 400,
      },
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

  //TODO change the icons and logo from our host and fix the email text
  const userMailOptions = {
    from: senderEmail,
    to: email,
    subject: "Richiesta informazioni",
    html: `
      <div style="text-align: center;">
        <img src="https://innotech.software/wp-content/uploads/2021/01/Logo_Innotech_Positive_RGB-800x166.png" alt="InnoTech Logo" style="max-width: 250px;"/> <!-- Set logo size to 250px -->
        <p>Hello ${firstName} ${lastName}!</p>
        <p>La tua richiesta è stata inoltrata a un nostro consulente che ti risponderà a breve. Grazie!</p>
        <p>Seguici sui nostri canali Social e non perdere nessuno dei nostri aggiornamenti!</p>
  
        <div style="display: inline-block; margin: 10px; border-radius: 50%; overflow: hidden; width: 45px; height: 45px;"> <!-- Set icon size to 45px -->
          <a href="https://www.facebook.com/InnoTechSrl" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="Facebook" width="45" height="45" style="object-fit: cover;" />
          </a>
        </div>
  
        <div style="display: inline-block; margin: 10px; border-radius: 50%; overflow: hidden; width: 45px; height: 45px;"> <!-- Set icon size to 45px -->
          <a href="https://www.linkedin.com/company/innotechsrl/posts/?feedView=all" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" alt="LinkedIn" width="45" height="45" style="object-fit: cover;" />
          </a>
        </div>
  
        <div style="display: inline-block; margin: 10px; border-radius: 50%; overflow: hidden; width: 45px; height: 45px;"> <!-- Set icon size to 45px -->
          <a href="https://x.com/InnotechSrl" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" width="45" height="45" style="object-fit: cover;" />
          </a>
        </div>
  
        <div style="display: inline-block; margin: 10px; border-radius: 50%; overflow: hidden; width: 45px; height: 45px;"> <!-- Set icon size to 45px -->
          <a href="https://www.instagram.com/innotech_srl/" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" width="45" height="45" style="object-fit: cover;" />
          </a>
        </div>
  
        <div style="display: inline-block; margin: 10px; border-radius: 50%; overflow: hidden; width: 45px; height: 45px;"> <!-- Set icon size to 45px -->
          <a href="https://www.youtube.com/channel/UCs1lvBra7nMneYANtfRsOIA" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width="45" height="45" style="object-fit: cover;" />
          </a>
        </div>
        
        <p>Copyright © 2020-2021 InnoTech srl. All rights reserved.</p>
        <p>You are receiving this notice because you submitted a form on the site www.innotech.software.</p>
      </div>
    `,
  };

  //TODO Fix the email text
  const companyMailOptions = {
    from: senderEmail,
    to: receiverEmail,
    subject: "Nuova richiesta informazioni",
    html: `
      <p>Un nuovo utente ha richiesto informazioni:</p>
      <p><strong>Nome:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p>Controlla il tuo sistema per ulteriori dettagli.</p>
    `,
  };

  try {
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(companyMailOptions);

    return new Response(
      JSON.stringify({
        message: "Notification emails sent successfully!",
      }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending notification emails:", error);
    return new Response(JSON.stringify({ message: "Error sending emails." }), {
      status: 500,
    });
  }
}
