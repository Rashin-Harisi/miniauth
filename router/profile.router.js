const { getProfile } = require("../controllers/prodile.controller");

const profileRouter = require("express").Router();

profileRouter.get('/api/profile',getProfile)

module.exports= profileRouter