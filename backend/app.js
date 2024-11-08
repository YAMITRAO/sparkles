const express = require("express");
const PORT = 3005;

const app = express();

app.use("/user", require("./routes/user"));

app.listen(PORT, () => {
  console.log("Connect at port", PORT);
});
