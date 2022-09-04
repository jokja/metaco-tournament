'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tournament extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tournament.hasMany(models.Team, {
        foreignKey: "tournament_id",
        as: "tournament",
      })
      Tournament.hasMany(models.TournamentResult, {
        foreignKey: "tournament_id",
        as: "tournamentResult",
      })
    }
  }
  Tournament.init({
    title: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    team_count: DataTypes.INTEGER,
    slot: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tournament',
  });
  return Tournament;
};