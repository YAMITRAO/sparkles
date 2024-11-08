const express = require("express");

const userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
  console.log("Request received");
  res.send("<div>Hello India</div>");
});

module.exports = userRoutes;
