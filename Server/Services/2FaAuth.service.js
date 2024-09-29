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
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Account - Real Estate Management</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; }
        img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
        table { border-collapse: collapse !important; }
        body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
        a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }
        div[style*="margin: 16px 0;"] { margin: 0 !important; }
    </style>
</head>
<body style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td bgcolor="#2C3E50" align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="480" >
                    <tr>
                        <td align="center" valign="top" style="padding: 40px 10px 40px 10px;">
                            <a href="https://www.yourcompany.com" target="_blank">
                                <img alt="Logo" src="/api/placeholder/200/80" width="200" height="80" style="display: block; font-family: 'Roboto', Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px;" border="0">
                            </a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="480" >
                    <tr>
                        <td bgcolor="#ffffff" align="left" valign="top" style="padding: 30px 30px 20px 30px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Roboto', Helvetica, Arial, sans-serif; font-weight: 400; line-height: 48px;">
                            <h1 style="font-size: 32px; font-weight: 400; margin: 0;">Welcome, ${req.body.username} !</h1>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="480" >
                    <tr>
                        <td bgcolor="#ffffff" align="left">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td colspan="2" style="padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: 'Roboto', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
                                        <p>Thank you for choosing Real Estate Management. To ensure the security of your account, please verify your email address using the code below:</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding-top: 20px; padding-bottom: 20px;">
                                        <table border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td align="center" style="border-radius: 8px;" bgcolor="#2C3E50">
                                                    <div style="font-size: 36px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 15px 25px; border-radius: 8px; border: 1px solid #2C3E50; display: inline-block; font-weight: bold; letter-spacing: 2px;">${otp}</div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="padding-left:30px;padding-right:15px;padding-bottom:10px; font-family: 'Roboto', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
                                        <p>This verification code will expire in 15 minutes. If you did not request this code, please disregard this email or contact our support team if you have any concerns.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="padding-left:30px;padding-right:15px;padding-bottom:30px; font-family: 'Roboto', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
                                        <p>Best regards,<br>The Real Estate Management Team</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="480" >
                    <tr>
                        <td bgcolor="#f4f4f4" align="left" style="padding: 30px 30px 30px 30px; color: #666666; font-family: 'Roboto', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;" >
                            <p style="margin: 0;">You received this email because you requested a verification code. If you did not request a code, you can safely ignore this email.</p>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#f4f4f4" align="left" style="padding: 0px 30px 30px 30px; color: #666666; font-family: 'Roboto', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;" >
                            <p style="margin: 0;">Real Estate Management, 1234 Main St, Anytown, AN 12345</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`,
  };

  try {
    const info = await transporter.sendMail(receiver);
    return { success: true, message: "OTP sent successfully!!" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to send OTP!!" };
  }
};

export { sendMail, sendOTPVerification };
