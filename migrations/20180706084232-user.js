'use strict';

const tableName = 'users';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(tableName, 'roleId', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
    await queryInterface.addColumn(tableName, 'levelId', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
    await queryInterface.addColumn(tableName, 'positionId', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(tableName, 'roleId');
    await queryInterface.removeColumn(tableName, 'levelId');
    await queryInterface.removeColumn(tableName, 'positionId');
  }
};
