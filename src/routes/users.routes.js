const { Router } = require("express");
const {
  createUserValidator,
  updateUserValidator,
} = require("../validators/users.validator");

const { createUser  } = require("../controllers/users.controller");

const router = Router();

router.post("/api/v1/users", createUserValidator, createUser);
//router.put("/api/v1/users/:id", updateUserValidator, updateUser);

module.exports = router;