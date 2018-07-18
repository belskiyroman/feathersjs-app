'use strict';
const tableName = 'currencies';
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
        currency_name: {
          type: Sequelize.TEXT,
          allowNull: false,
          unique: true,
        },
        currency_symbol: {
          type: Sequelize.TEXT,
          allowNull: false,
          unique: true,
        }
      }, benchmark(tableName));

      await queryInterface.addConstraint(tableName, ['currency_name', 'currency_symbol'], {
        type: 'unique',
        name: 'unique_currency'
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
