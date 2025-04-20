const loginRouter = require("express").Router();

loginRouter.post('/login',(req,res)=>{
    const {username, password} = req.body
    res.send(`Hi ${username} with ${password} from loging route`)
})

module.exports= loginRouter