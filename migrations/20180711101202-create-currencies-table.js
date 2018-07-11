'use strict';

const tableName = 'currencies';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      currency_name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      currency_symbol: {
        type: Sequelize.TEXT,
        allowNull: false,
      }
    });

    return queryInterface.addConstraint(tableName, ['currency_name', 'currency_symbol'], {
      type: 'unique',
      name: 'unique_currency'
    });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName, {});
  }
};
