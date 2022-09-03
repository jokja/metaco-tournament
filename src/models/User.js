const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class User extends Model {};

User.init({
  email: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING
  },
  coin: {
    type: DataTypes.INTEGER
  },
  picture: {
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
  modelName: 'user',
  timestamps: false
})

module.exports = User;