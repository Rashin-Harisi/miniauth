const UserModel = require("../models/user.mode");
const { comparePassword } = require("../utils/hashBcrypt");
const { signToken } = require("../utils/jwt");

const loginCntroller = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw {
        status: 404,
        message: "User not found",
      };
    }
    if (comparePassword(password, user.password)) {
      const token = signToken({ id: user._id, email: user.email });
      res.cookie("cookieToken", token, {
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
      });
      console.log("user loged in successfully")
      res.redirect('/')
    } else {
        req.session.error = "The password or email is incorrect!"
      res.redirect("/auth/login");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginCntroller,
};
