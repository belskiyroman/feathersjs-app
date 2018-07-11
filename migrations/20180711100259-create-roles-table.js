'use strict';
const tableName = 'roles';

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
    });

    return queryInterface.addConstraint(tableName, ['role'], {
      type: 'unique',
      name: 'unique_role',
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName, {});
  }
};
