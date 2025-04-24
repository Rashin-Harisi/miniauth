const UserModel = require("../models/user.mode");
const { verifyToken } = require("../utils/jwt");

async function autherization(req, res, next) {
 try {
    const token = req.cookies.cookieToken;
    if (!token) {
      return res.redirect('/auth/login')
    }
    const result = verifyToken(token)
  
    
    const user = await UserModel.findOne({email:result.email})
    if(!user){
      throw {
          status:401,
          message: "User not found. Please login again."
      }
    }
    req.user = {
      username : user.username,
      email: user.email
    }
     next();
 } catch (error) {
    next(error)
 }
}

function authnticatedUser(req, res, next) {
  try {
    const token = req.cookies.cookieToken;
    if (!token) {
      return next();
    }
    const result = verifyToken(token);
    if (result) {
      return res.redirect('/profile');
    }
    next();   
  } catch (error) {
    next();
  }
}


module.exports = {
  autherization,
  authnticatedUser
};
