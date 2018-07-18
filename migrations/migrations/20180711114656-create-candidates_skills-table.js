'use strict';
const tableName = 'candidates_skills';
const { errorHandler, benchmark } = require('../common');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable(tableName, {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        candidate_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'candidates',
            key: 'id',
          }
        },
        skill_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'skills',
            key: 'id',
          }
        },
      }, benchmark(tableName));
    } catch (e) {
      errorHandler(e);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable(tableName, benchmark(tableName));
    } catch (e) {
      errorHandler(e);
    }
  }
};
