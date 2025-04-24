const { hashedPassword } = require("../utils/hashBcrypt");
const UserModel = require("../models/user.mode");

const signupController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashed = hashedPassword(password);
    const user = await UserModel.findOne({email})
    if(user){
      const Refferer= req?.header("Refferer") ?? req.headers.referer
      req.session.error = "The user is already existed."
      return res.redirect( "/auth/signup")
    }
    const newUser = new UserModel({
      username,
      email,
      password: hashed,
    });
    await newUser.save();
    console.log("user created successfuly")
    return res.redirect("/auth/login") 
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signupController,
};
