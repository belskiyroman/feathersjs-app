'use strict';

const tableName = 'statuses';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: Sequelize.TEXT,
        allowNull: false,
      }
    });

    return queryInterface.addConstraint(tableName, ['status'] , {
      type: 'unique',
      name: 'unique_status'
    });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName, {});
  }
};
