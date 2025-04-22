const { autherization } = require("../middlewares/autherization.middleware");
const loginRouter = require("./login.router");
const profileRouter = require("./profile.router");
const signupRouter = require("./signup.router");

const Router = require("express").Router();

Router.get('/',(req,res)=>{
    res.render('index',{title: "Authentication"})
})
Router.get("/auth/login",(req,res)=>{
    res.render('login',{title: "Login"})
})
Router.get("/auth/signup",(req,res)=>{
    res.render('signup',{title: "Signup"})
})
Router.use('/auth', loginRouter)
Router.use('/auth', signupRouter)
Router.use('/', autherization ,profileRouter)



module.exports = Router