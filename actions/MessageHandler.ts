'use server'
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export default async function MessageHandler(subject: string, message: string) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.SMTP_USER,
      subject: subject,
      text: message
    })
    console.log("In MessageHandler")

    return "Email was delivered."

  } catch (error) {
    console.log(error)
    return error
  }
}
