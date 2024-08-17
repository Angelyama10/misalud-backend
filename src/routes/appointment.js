const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Hola");
});

module.exports = route;
