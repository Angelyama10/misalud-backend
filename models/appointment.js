"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appointment.belongsTo(models.Doctor, {
        foreignKey: "doctorId",
      });
      Appointment.belongsTo(models.User, {
        foreignKey: "patientId",
      });
    }
  }
  Appointment.init(
    {
      doctorId: DataTypes.INTEGER,
      patientId: DataTypes.INTEGER,
      hour: DataTypes.TIME,
      reason: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Appointment",
    }
  );
  return Appointment;
};
