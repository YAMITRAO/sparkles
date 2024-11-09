require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const MONGODB_CONNECTION_ULR = process.env.MONGODB_CONNECTION_STRING;

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", require("./routes/User"));

mongoose
  .connect(MONGODB_CONNECTION_ULR)
  .then((res) => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => console.log(error));
app.listen(PORT, () => {
  console.log("Connect at port", PORT);
});
