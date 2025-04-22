const { getProfile } = require("../controllers/prodile.controller");

const profileRouter = require("express").Router();

profileRouter.get('/profile',getProfile)

module.exports= profileRouter