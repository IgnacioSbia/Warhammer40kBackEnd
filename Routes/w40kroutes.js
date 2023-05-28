const express = require("express");
const routes = express.Router();
const {verifyToken} = require('../Middlewares/authUser');
const { getRaces, regUser, loginTo, getUserMail } = require("../Controllers/w40kcontrollers");

//getRaces
routes.get('/races', getRaces);
//Register
routes.post('/register', regUser);
//Login
routes.post('/login', loginTo)
//GetUserNameById
routes.get('/userEmail', getUserMail)


//export
module.exports = routes;