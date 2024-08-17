const db = require("../../../../models/index.js");
const CustomError = require("../../../utils/customError.js");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {
    const { name, email, password, phone, gender, birthday, profilePicture } =
      req.body;

    const requiredFields = [
      "name",
      "email",
      "password",
      "phone",
      "gender",
      "birthday",
      "profilePicture",
    ];

    const missingFields = requiredFields.filter((field) => !req.body[field]);

    if (missingFields.length > 0) {
      return next(
        new CustomError(`Fields missing: ${missingFields.join(", ")}`, 400)
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      gender,
      birthday,
      profilePicture,
    });

    return res.status(201).json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    return next(new CustomError("Server error", 500));
  }
};

module.exports = register;
