'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Team.belongsTo(models.User, {
        foreignKey: "captain_id",
        as: "captain",
      })
      Team.belongsTo(models.Tournament, {
        foreignKey: "tournament_id",
        as: "tournament",
      })
      Team.hasMany(models.TeamMember, {
        foreignKey: "team_id",
        as: "team",
      })
      Team.hasMany(models.TournamentResult, {
        foreignKey: "team_id",
        as: "teamTurnamentResult",
      })
    }
  }
  Team.init({
    name: DataTypes.STRING,
    captain_id: DataTypes.INTEGER,
    logo: DataTypes.STRING,
    tournament_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};