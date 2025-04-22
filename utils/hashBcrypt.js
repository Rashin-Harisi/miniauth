const bcrypt = require('bcrypt')


function hashedPassword(password){
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password,salt)
    return hash
}

function comparePassword(password,hashedPassword){
    return bcrypt.compareSync(password,hashedPassword)
}

module.exports = {
    hashedPassword,
    comparePassword
}