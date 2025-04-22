const mongoose = require('mongoose')

 function connectdb(){
     mongoose.connect(process.env.DB_CONNECTION_STRING).then(()=>{
        console.log("Connected to DB!")
    }).catch((err) => {
        console.error("MongoDB connection error:", err);
      });

}

module.exports = connectdb