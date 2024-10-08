const express = require("express");
const router = express.Router();
const auth = require("../controllers/coreControllers/auth");

router.route("/login").post(auth.login);
router.route("/register").post(auth.register);

module.exports = router;
