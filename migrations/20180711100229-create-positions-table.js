'use strict';

const tableName = 'positions';

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
    });

    return queryInterface.addConstraint(tableName, ['position'], {
      type: 'unique',
      name: 'unique_position',
    });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName, {});
  }
};
