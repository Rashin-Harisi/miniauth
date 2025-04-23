const express = require('express')
const dotenv = require('dotenv').config()
const path = require("path")
const { NotFound, ErrorHandler } = require('./utils/errorHandler')
const Router = require('./router')
const connectdb = require('./utils/dbConnection')
const cookieParser = require('cookie-parser')
var expressLayouts = require('express-ejs-layouts');
const flash = require('flash');
const session = require("express-session")




const app = express()
app.use(cookieParser())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  }))
app.use(flash())
connectdb();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(expressLayouts);
app.use(express.static('public'))
app.set("view engine",'ejs')
app.set('layout','./layouts/main.ejs')
app.set("views",path.join(__dirname, "views"))


app.use(Router)
app.use(NotFound)
app.use(ErrorHandler)
app.listen(3000,()=>{
    console.log("server is ready on http://localhost:3000")
})