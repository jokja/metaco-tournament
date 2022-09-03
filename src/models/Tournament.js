const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Tournament extends Model {};

Tournament.init({
  title: {
    type: DataTypes.STRING
  },
  start_date: {
    type: DataTypes.DATE
  },
  end_date: {
    type: DataTypes.DATE
  },
  team_count: {
    type: DataTypes.INTEGER
  },
  slot: {
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
  modelName: 'tournament',
  timestamps: false
})

module.exports = Tournament;