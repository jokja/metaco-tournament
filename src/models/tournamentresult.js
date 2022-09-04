'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TournamentResult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TournamentResult.belongsTo(models.Team, {
        foreignKey: "team_id",
        as: "team",
      })
      TournamentResult.belongsTo(models.Tournament, {
        foreignKey: "tournament_id",
        as: "tournament",
      })
    }
  }
  TournamentResult.init({
    team_id: DataTypes.INTEGER,
    position: DataTypes.INTEGER,
    point: DataTypes.INTEGER,
    tournament_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TournamentResult',
  });
  return TournamentResult;
};