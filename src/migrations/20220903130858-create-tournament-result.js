'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TournamentResults', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      team_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Team',
          key: 'id'
        }
      },
      position: {
        type: Sequelize.INTEGER
      },
      point: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('TournamentResults');
  }
};