const db = require("../../../../models/index.js");
const CustomError = require("../../../utils/customError.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await db.User.findOne({ where: { email } });

    if (!user) {
      return next(new CustomError("User not found", 404));
    }

    if (!user.password) {
      return next(new CustomError("User not found", 404));
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return next(new CustomError("Invalid password", 401));
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // save token in the cookies

    res.cookie("token", token, { httpOnly: true, maxAge: 60 * 60 * 24 * 7 });

    return res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = login;
