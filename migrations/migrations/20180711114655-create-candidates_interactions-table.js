'use strict';
const tableName = 'candidates_interactions';
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
            key: 'id'
          },
        },
        interaction_type_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'interaction_types',
            key: 'id',
          },
        },
        interaction_date: {
          type: Sequelize.DATE,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE
        },
        updated_at: {
          type: Sequelize.DATE
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