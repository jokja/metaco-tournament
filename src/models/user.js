'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Team, {
        foreignKey: "captain_id",
        as: "captain",
      })
      User.hasMany(models.TeamMember, {
        foreignKey: "user_id",
        as: "user",
      })
    }
  }
  User.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    coin: DataTypes.INTEGER,
    picture: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};