const Users = require("./users.model");
const Products = require("./products.model");
const Cars = require("./cars.model");
const ProductsInCar = require("./productsInCar.model");
const Orders = require("./orders.model");
const ProductsInOrder = require("./productsInOrder.model");

const initModels = () => {
  Users.hasMany(Products, { foreignKey: "userId" });
  Products.belongsTo(Users, { foreignKey: "userId" });

  Cars.hasMany(ProductsInCar, { foreignKey: "carId" });
  ProductsInCar.belongsTo(Cars, { foreignKey: "carId" });

  Products.hasMany(ProductsInCar, { foreignKey: "productId" });
  ProductsInCar.belongsTo(Products, { foreignKey: "productId" });

  Users.hasMany(Orders, { foreignKey: "userId" });
  Orders.belongsTo(Users, { foreignKey: "userId" });

  Orders.hasMany(ProductsInOrder, { foreignKey: "orderId" });
  ProductsInOrder.belongsTo(Orders, { foreignKey: "orderId" });

  Products.hasMany(ProductsInOrder, { foreignKey: "productId" });
  ProductsInOrder.belongsTo(Products, { foreignKey: "productId" });

  Users.hasOne(Cars, { foreignKey: "userId" });
  Cars.belongsTo(Users, { foreignKey: "userId" });
};

module.exports = initModels;