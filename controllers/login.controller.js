const UserModel = require("../models/user.mode");
const { comparePassword } = require("../utils/hashBcrypt");
const { signToken } = require("../utils/jwt");

const loginCntroller = async(req,res,next)=>{
    try {
        const{email,password} = req.body;
        const user = await UserModel.findOne({email})
        if(!user){
             throw {
                status:404,
                message: "User not found"
            }
        }
        if(comparePassword(password,user.password)){
            const token = signToken({id : user._id, email : user.email})
            res.cookie("cookieToken",token,{
                httpOnly: true,
                secure: false, 
                sameSite: 'Lax',
              })
            res.send({message : "login successfully"})
        }
        
    } catch (error) {
        next(error)
    }
}

module.exports = {
    loginCntroller
}