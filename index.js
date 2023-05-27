const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const audnroutes = require("./routes/audnroutes")
const cors = require("cors");

//server
const app = express();


//middleware
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use('/api', audnroutes)

//Launch Server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server successfully launched at PORT:8000");
});