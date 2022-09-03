const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');
const Team = require('./Team');
const User = require('./User');

class TeamMember extends Model {};

TeamMember.init({
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  team_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Team,
      key: 'id'
    }
  },
  roles: {
    type: DataTypes.STRING
  },
  ingame_id: {
    type: DataTypes.STRING
  },
  created_at: {
    type: DataTypes.DATE
  },
  updated_at: {
    type: DataTypes.DATE
  }
}, {
  sequelize,
  modelName: 'team_member',
  timestamps: false
})

module.exports = TeamMember;