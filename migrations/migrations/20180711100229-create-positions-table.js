'use strict';
const tableName = 'positions';
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
        position: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE
        },
      }, benchmark(tableName));

      await queryInterface.addConstraint(tableName, ['position'], {
        type: 'unique',
        name: 'unique_position',
      }, benchmark(tableName));
    } catch(e) {
      errorHandler(e);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable(tableName, benchmark(tableName));
    } catch(e) {
      errorHandler(e);
    }
  }
};
