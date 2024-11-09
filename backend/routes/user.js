const express = require("express");
const { userSignUpController } = require("../controller/User");

const userRoutes = express.Router();

// user routes
userRoutes.post("/signup", userSignUpController);

module.exports = userRoutes;
