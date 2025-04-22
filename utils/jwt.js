const jws = require('jsonwebtoken')
const secret = process.env.SECRET_KEY;

function signToken(payload){
    const token = jws.sign(payload,secret)
    return token
} 

function verifyToken (token){
   const result = jws.verify(token,secret)
   return result
}

module.exports={
    signToken,
    verifyToken
}