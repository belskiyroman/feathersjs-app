'use strict';
const tableName = 'roles';
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
        role: {
          type: Sequelize.TEXT,
          allowNull: false,
        }
      }, benchmark(tableName));

      await queryInterface.addConstraint(tableName, ['role'], {
        type: 'unique',
        name: 'unique_role',
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
