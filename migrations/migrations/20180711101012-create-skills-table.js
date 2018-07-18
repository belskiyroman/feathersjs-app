'use strict';
const tableName = 'skills';
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
        skill: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE
        },
      }, benchmark(tableName));

      await queryInterface.addConstraint(tableName, ['skill'], {
        type: 'unique',
        name: 'unique_skill',
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
