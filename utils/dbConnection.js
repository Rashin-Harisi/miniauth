const mongoose = require('mongoose')

 function connectdb(){
     mongoose.connect("mongodb://localhost:27017/authentication").then(()=>{
        console.log("Connected to DB!")
    }).catch((err) => {
        console.error("MongoDB connection error:", err);
      });

}

module.exports = connectdb