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
const userRoutes = require("./routers/userRoutes.js"); // Importar userRoutes

app.use(url_base, auth);
app.use(url_base, userRoutes); // Montar userRoutes en la misma base

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

conexion();
