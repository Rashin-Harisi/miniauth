const { signupController } = require("../controllers/signup.controller");
const UserModel = require("../models/user.mode");
const signupRouter = require("express").Router();

signupRouter.post("/signup", signupController);

module.exports = signupRouter;
