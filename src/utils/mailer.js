const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'yandryad82@gmail.com',
    pass: 'kadzdriwxyodauqy',
  }
});

module.exports = transporter;