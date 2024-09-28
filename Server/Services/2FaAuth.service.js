import prisma from "../lib/prisma.js";
import nodemailer from "nodemailer"; // Library to send emails
import ENV_VARIABLES from "../constants.js";

const sendOTPVerification = async (user) => {
  try {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
    const expiredAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    const createOTP = await prisma.userOTPVerification.create({
      data: {
        otp,
        expiredAt,
        userId: user.id,
      },
    });

    return createOTP.otp;
  } catch (error) {
    console.error(`OTP error => ${error}`);
  }
};

const sendMail = async (req, res, otp) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true,
    port: 465,
    auth: {
      user: ENV_VARIABLES.SENDERS_MAIL,
      pass: ENV_VARIABLES.PASSWORD,
    },
  });

  const receiver = {
    from: ENV_VARIABLES.SENDERS_MAIL,
    to: req.body.email,
    subject: "Verify Your Account - Real Estate Management",
    text: `Your verification code is: ${otp}. This code will expire in 15 minutes.`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verify Your Account</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #1a1a1a; color: #ffffff;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #2c2c2c;">
          <div style="background-color: #3d3d3d; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; color: #4db6ac; font-size: 30px;">Real Estate Management</h1>
          </div>
          <div style="padding: 30px; text-align: center; background-color: #2c2c2c; border-radius: 0 0 8px 8px;">
          <h2 style="color: #4db6ac; font-size: 25px;">Welcome, ${req.body.username} !</h2>
            <h2 style="color: #4db6ac; font-size: 24px; margin-bottom: 20px;">Verify Your Account</h2>
            <p style="color: #e0e0e0; font-size: 16px; line-height: 1.5;">Thank you for choosing Real Estate Management. To complete your account verification, please use the following code:</p>
            <div style="font-size: 36px; font-weight: bold; color: #ffffff; margin: 30px 0; padding: 15px; background-color: #4db6ac; border-radius: 8px; display: inline-block;">
              ${otp}
            </div>
            <p style="color: #e0e0e0; font-size: 14px; margin-bottom: 20px;">This verification code will expire in 15 minutes.</p>
            <p style="color: #bdbdbd; font-size: 14px; font-style: italic;">If you didn't request this code, please ignore this email or contact our support team if you have any concerns.</p>
          </div>
          <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #9e9e9e; padding: 0 20px;">
            <p style="margin-top: 10px;">This is an automated message, please do not reply to this email.</p>
          </div>
        </div>
      </body>
      </html>`,
  };

  try {
    const info = await transporter.sendMail(receiver);
    console.log(info);
    return { success: true, message: "OTP sent successfully!!" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to send OTP!!" };
  }
};

export { sendMail, sendOTPVerification };
