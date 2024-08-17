const express = require("express");
const dotenv = require("dotenv");
const { conexion } = require("./config/db.conection.js");
const notFound = require("./src/middlewares/notFound.js");
const errorHandler = require("./src/middlewares/errorHandler.js");

const app = express();
dotenv.config();

app.use(express.json());

const port = process.env.PORT || 4001;
const url_base = "/api/v1";

// routes
const auth = require("./src/routes/auth.route.js");

app.use(url_base, auth);

app.use(notFound);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

conexion();

/*
user model attributes

name,
email,
password,
phone,
gender,
birthday,
profilePicture,


doctor model attributes

name,
email,
phone,
gender,
birthday,
profilePicture,
specialization,
availability,
hours,
fees,
services

*/
