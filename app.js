const express = require('express')
const app = express()
const path = require("path")
const { NotFound, ErrorHandler } = require('./utils/errorHandler')
const Router = require('./router')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set("view engine",'ejs')
app.set("views",path.join(__dirname, "views"))

app.get('/',(req,res)=>{
    res.render('index',{title: "Authentication",user:"Guest"})
})
app.use(Router)
app.use(NotFound)
app.use(ErrorHandler)
app.listen(3000,()=>{
    console.log("server is ready on http://localhost:3000")
})