'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeamMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TeamMember.belongsTo(models.Team, {
        foreignKey: "team_id",
        as: "team",
      })
      TeamMember.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      })
    }
  }
  TeamMember.init({
    user_id: DataTypes.INTEGER,
    team_id: DataTypes.INTEGER,
    roles: DataTypes.STRING,
    ingame_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TeamMember',
  });
  return TeamMember;
};