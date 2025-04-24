const {
  autherization,
  authnticatedUser,
} = require("../middlewares/autherization.middleware");
const loginRouter = require("./login.router");
const profileRouter = require("./profile.router");
const signupRouter = require("./signup.router");

const Router = require("express").Router();

Router.get("/", (req, res) => {
  res.render("index", { title: "Authentication" });
});
Router.get("/auth/login",authnticatedUser, (req, res) => {
  res.render("login", { title: "Login" });
});
Router.get("/auth/signup",authnticatedUser, (req, res) => {
  res.render("signup", { title: "Signup" });
});
Router.get("/profile", autherization, (req, res) => {
  res.render("profile", { title: "Profile" });
});
Router.get("/logout", (req, res) => {
    res.clearCookie('cookieToken', {
        httpOnly: true,
        secure: false, 
        sameSite: 'Lax'
      });
      console.log("User logged out.");
  res.redirect("/auth/login");
});

Router.use("/auth", loginRouter);
Router.use("/auth", signupRouter);
Router.use("/", autherization, profileRouter);

module.exports = Router;
