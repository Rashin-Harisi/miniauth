const loginRouter = require("./login.router");
const signupRouter = require("./signup.router");

const Router = require("express").Router();

Router.use('/auth', loginRouter)
Router.use('/auth', signupRouter)


module.exports = Router