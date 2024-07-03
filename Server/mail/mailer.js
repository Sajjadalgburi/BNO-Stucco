const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    // the users email and password for gmail
    user: process.env.ACCOUNT_EMAIL,
    pass: process.env.ACCOUNT_PASS
  }
});

// Function to send mail
const sendMail = async (to) => {
  // send mail with defined transport object
  const mailOptions = {
    from: process.env.ACCOUNT_EMAIL, // sender address
    to,
    cc: process.env.ACCOUNT_EMAIL, // CC stands for Carbon Copy - when a copy of the email is sent to a primary email, in this case, the company email
    subject: 'Thank You for Contacting Us!', // Subject line
    text: `Dear ${to},\n\nThank you for contacting BNO Stucco. We have received your message and will get back to you as soon as possible.\n\nBest regards,\nThe BNO Stucco Team`,
    html: `
      <p>Dear ${to},</p>
      <p>Thank you for contacting BNO Stucco. We have received your message and will get back to you as soon as possible.</p>
      <br/>
      <p>Best regards,</p>
      <p>The BNO Stucco Team</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
};

module.exports = sendMail;
