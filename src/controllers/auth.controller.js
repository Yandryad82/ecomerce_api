const UserServices = require("../services/users.service");
const AuthServices = require("../services/auth.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserServices.getUser(email);
    
    if (!user) {
      return next({
        status: 400,
        message: "Invalid email",
        errorName: "User not found",
      });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return next({
        status: 400,
        message: "The password doesn't match with email user",
        errorName: "Invalid password",
      });
    }
    
    const { id, lastname, username } = user;
    
    const token = AuthServices.genToken({ id, lastname, username });
    res.json({
      id,
      lastname,
      username,
      email,
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  userLogin,
  
};