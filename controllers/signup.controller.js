const { hashedPassword } = require("../utils/hashBcrypt");
const UserModel = require("../models/user.mode");

const signupController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashed = hashedPassword(password);
    const newUser = new UserModel({
      username,
      email,
      password: hashed,
    });
    await newUser.save();
    res.send("User saved and DB created!");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signupController,
};
