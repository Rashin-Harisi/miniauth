const { autherization } = require("../middlewares/autherization.middleware");
const loginRouter = require("./login.router");
const profileRouter = require("./profile.router");
const signupRouter = require("./signup.router");

const Router = require("express").Router();

Router.use('/auth', loginRouter)
Router.use('/auth', signupRouter)
Router.use('/', autherization ,profileRouter)



module.exports = Router