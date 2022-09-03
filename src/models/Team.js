const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class Team extends Model {}

Team.init({
  name: {
    type: DataTypes.STRING
  },
  captain_id: {
    type: DataTypes.INTEGER
  },
  logo: {
    type: DataTypes.STRING
  },
  tournament_id: {
    type: DataTypes.INTEGER
  },
  created_at: {
    type: DataTypes.DATE
  },
  updated_at: {
    type: DataTypes.DATE
  }
}, {
  sequelize,
  modelName: 'team',
  timestamps: false
})

module.exports = Team