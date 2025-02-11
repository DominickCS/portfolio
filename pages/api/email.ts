import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { email, message, name } = req.body; // ✅ Correct way to get data in Pages Router

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `Message from ${name} (${email})`,
      text: message,
    };

    await transport.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//   const sendMailPromise = () =>
//     new Promise<string>((resolve, reject) => {
//       transport.sendMail(mailOptions, function (err) {
//         if (!err) {
//           resolve('Email sent');
//         } else {
//           reject(err.message);
//         }
//       });
//     });
//
//   try {
//     await sendMailPromise();
//     return NextResponse.json({ message: 'Email sent' });
//   } catch (err) {
//     return NextResponse.json({ error: err }, { status: 500 });
//   }
// }
