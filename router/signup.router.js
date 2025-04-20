const UserModel = require("../models/user.mode");
const signupRouter = require("express").Router();

signupRouter.post('/signup',async(req,res)=>{
    const {username, email ,password} = req.body
    const newUser = new UserModel({
        username,
        email,
        password
    })
    await newUser.save()
    res.send("User saved and DB created!");
})

module.exports= signupRouter