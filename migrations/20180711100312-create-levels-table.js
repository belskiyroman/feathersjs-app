'use strict';

const tableName = 'levels';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      level: {
        type: Sequelize.TEXT,
        allowNull: false,
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName, {});
  }
};
