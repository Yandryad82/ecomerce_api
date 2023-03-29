const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "ecomerce_db",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123.Abc*",
  dialect: "postgres",
  logging: false,
});

module.exports = db;