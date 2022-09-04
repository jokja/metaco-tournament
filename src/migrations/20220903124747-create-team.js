'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      captain_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User',
          key: 'id'
        }
      },
      logo: {
        type: Sequelize.STRING
      },
      tournament_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tournament',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Teams');
  }
};