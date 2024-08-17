"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Doctor.hasMany(models.Appointment, {
        foreignKey: "doctorId",
      });
      Doctor.belongsToMany(models.User, {
        through: "PatientDoctor",
        foreignKey: "doctorId",
      });
    }
  }
  Doctor.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      gender: DataTypes.STRING,
      birthday: DataTypes.DATE,
      profilePicture: DataTypes.STRING,
      specialization: DataTypes.STRING,
      availability: DataTypes.STRING,
      hours: DataTypes.STRING,
      fees: DataTypes.STRING,
      services: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Doctor",
    }
  );
  return Doctor;
};
