'use strict';

const tableName = 'users';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(tableName, 'firstName', {
      type: Sequelize.TEXT,
      defaultValue: '',
      allowNull: false,
    });
    await queryInterface.addColumn(tableName, 'lastName', {
      type: Sequelize.TEXT,
      defaultValue: '',
      allowNull: false,
    });
    await queryInterface.addColumn(tableName, 'photo', {
      type: Sequelize.TEXT,
      defaultValue: null,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(tableName, 'firstName');
    await queryInterface.removeColumn(tableName, 'lastName');
    await queryInterface.removeColumn(tableName, 'photo');
  }
};
