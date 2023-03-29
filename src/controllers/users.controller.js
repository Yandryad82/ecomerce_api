const UsersServices = require("../services/users.service");

const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UsersServices.create(newUser);
    res.status(201).json(result);
          
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
};