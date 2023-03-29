const Users = require("../models/users.model");

class UsersServices {
  static async getUser(email) {
    try {
      // SELECT * FROM users where email = email
      const user = await Users.findOne({
        where: { email },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
  
  static async create(newUser) {
    try {
      const userCreated = await Users.create(newUser);
      return userCreated;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = UsersServices;