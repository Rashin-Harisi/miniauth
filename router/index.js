const loginRouter = require("./login.router");

const Router = require("express").Router();

Router.use('/auth', loginRouter)

module.exports = Router