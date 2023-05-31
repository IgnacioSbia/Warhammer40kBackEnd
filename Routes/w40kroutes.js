const express = require("express");
const routes = express.Router();
const {verifyToken} = require('../Middlewares/authUser');
const { getRaces, regUser, loginTo, getUserMail, insertUserFavourite, deleteFavouriteRace } = require("../Controllers/w40kcontrollers");

//getRaces
routes.get('/races', getRaces);
//Register
routes.post('/register', regUser);
//Login
routes.post('/login', loginTo)
//GetUserNameById
routes.get('/userEmail',getUserMail)
//Insert Favourite Race to User
routes.post('/FavRace' ,verifyToken,insertUserFavourite)
//Delete Favourite Race to User
routes.delete('/deleteFavRace',verifyToken,deleteFavouriteRace)
//export
module.exports = routes;