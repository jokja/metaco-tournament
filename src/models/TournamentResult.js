const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');
const Team = require('./Team');
const Tournament = require('./Tournament');

class TournamentResult extends Model {};

TournamentResult.init({
  team_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Team,
      key: 'id'
    }
  },
  position: {
    type: DataTypes.INTEGER
  },
  point: {
    type: DataTypes.INTEGER
  },
  tournament_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Tournament,
      key: 'id'
    }
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'tournament_result',
  timestamps: false
})

module.exports = TournamentResult