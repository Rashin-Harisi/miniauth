const { loginCntroller } = require("../controllers/login.controller");
const loginRouter = require("express").Router();

loginRouter.post('/login',loginCntroller)

module.exports= loginRouter