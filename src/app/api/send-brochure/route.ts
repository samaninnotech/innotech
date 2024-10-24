// import fetch from "node-fetch";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   const { email, brochureUrl, senderEmail, senderPassword } = await req.json();
//   if (!email || !brochureUrl || !senderEmail || !senderPassword) {
//     return new Response(
//       JSON.stringify({
//         message:
//           "Email, brochure URL, sender email, and password are required.",
//       }),
//       {
//         status: 400,
//       },
//     );
//   }

//   let brochureBuffer: Buffer;
//   try {
//     const response = await fetch(brochureUrl);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch brochure: ${response.statusText}`);
//     }

//     const arrayBuffer = await response.arrayBuffer();
//     brochureBuffer = Buffer.from(arrayBuffer);
//   } catch (error) {
//     console.error("Error fetching brochure:", error);
//     return new Response(
//       JSON.stringify({ message: "Error fetching brochure." }),
//       { status: 500 },
//     );
//   }

//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: Number(process.env.SMTP_PORT),
//     secure: false,
//     auth: {
//       user: senderEmail,
//       pass: senderPassword,
//     },
//   });

//   const mailOptions = {
//     from: senderEmail,
//     to: email,
//     subject: "Your Requested Brochure",
//     text: `Here is the link to your brochure: ${brochureUrl}`,
//     html: `<p>Here is the link to your brochure: <a href="${brochureUrl}">${brochureUrl}</a></p>`,
//     attachments: [
//       {
//         filename: "brochure.pdf",
//         content: brochureBuffer,
//       },
//     ],
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return new Response(
//       JSON.stringify({ message: "Email sent successfully!" }),
//       { status: 200 },
//     );
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return new Response(JSON.stringify({ message: "Error sending email." }), {
//       status: 500,
//     });
//   }
// }
/**************** */
import fetch from "node-fetch";
interface TokenResponse {
  token_type: string;
  expires_in: number;
  ext_expires_in: number;
  access_token: string;
  scope: string;
}

interface ErrorResponse {
  error: {
    code: string;
    message: string;
  };
}
export async function POST(req: Request) {
  const { email, brochureUrl, senderEmail, senderPassword } = await req.json();
  if (!email || !brochureUrl || !senderEmail || !senderPassword) {
    return new Response(
      JSON.stringify({
        message:
          "Email, brochure URL, sender email, and password are required.",
      }),
      { status: 400 },
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

  const tenant = process.env.TENANT_ID;
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const tokenUrl = `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`;

  let accessToken: string;
  try {
    const tokenResponse = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: clientId!,
        client_secret: clientSecret!,
        scope: ".default",
        username: senderEmail,
        password: senderPassword,
        grant_type: "password",
      }),
    });

    const tokenData: TokenResponse =
      (await tokenResponse.json()) as TokenResponse;
    if (!tokenResponse.ok || !tokenData.access_token) {
      throw new Error(`Failed to get access token: ${tokenData.access_token}`);
    }

    accessToken = tokenData.access_token;
  } catch (error) {
    console.error("Error obtaining access token:", error);
    return new Response(
      JSON.stringify({ message: "Error obtaining access token." }),
      { status: 500 },
    );
  }

  const emailPayload = {
    message: {
      subject: "Your Requested Brochure",
      body: {
        contentType: "HTML",
        content: `<p>Here is the link to your brochure: <a href="${brochureUrl}">${brochureUrl}</a></p>`,
      },
      toRecipients: [
        {
          emailAddress: {
            address: email,
          },
        },
      ],
      attachments: [
        {
          "@odata.type": "#microsoft.graph.fileAttachment",
          name: "brochure.pdf",
          contentType: "application/pdf",
          contentBytes: brochureBuffer.toString("base64"),
        },
      ],
    },
    saveToSentItems: "false",
  };

  try {
    const mailResponse = await fetch(
      `https://graph.microsoft.com/v1.0/me/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailPayload),
      },
    );

    if (!mailResponse.ok) {
      const errorData: ErrorResponse =
        (await mailResponse.json()) as ErrorResponse;
      throw new Error(`Failed to send email: ${errorData.error.message}`);
    }

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
