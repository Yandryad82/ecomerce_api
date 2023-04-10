const UsersServices = require("../services/users.service");
const Transporter = require("../utils/mailer");

const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UsersServices.create(newUser);
    console.log(result);
    res.status(201).json(result);
    await Transporter.sendMail({
      from: 'ecomerceapi@gmail.com',
      to: result.email,
      subject: `Bienvenido ${result.username}`,
      html: 
      `<p>Hola ${result.username}. Te damos la bievenida a nuestro Ecomerce</p>`
    })
    .then()
    .catch((error) => console.log(error));      
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
};