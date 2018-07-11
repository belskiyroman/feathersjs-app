'use strict';

const tableName = 'skills';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      skill: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE
      },
    });

    await queryInterface.addConstraint(tableName, ['skill'], {
      type: 'unique',
      name: 'unique_skill',
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName, {});
  }
};
