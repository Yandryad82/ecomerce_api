const nodeMailer = require('nodemailer');
require('dotenv').config();

const transporter = nodeMailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.G_USERNAME,
    pass: process.env.G_PASSWORD,
  }
});

module.exports = transporter;