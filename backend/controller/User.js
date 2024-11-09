const UserModel = require("../model/userModel");

const userSignUpController = async (req, res) => {
  try {
    console.log("The body is :-", req?.body);
    const { name, email, password, confirmPassword } = req?.body;

    // password length and validation check
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    } else if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be 8 characters or more",
      });
    }
    const user = await UserModel.findOne({ email });
    console.log("is user avilable", user);
    if (user !== null) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const updateUser = await new UserModel({
      name,
      email,
      password,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Error during Signup",
    });
  }
};

module.exports = {
  userSignUpController,
};
