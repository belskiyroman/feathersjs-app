'use strict';
const tableName = 'candidates_public_profiles';
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
        candidate_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'candidates',
            key: 'id',
          },
        },
        profile_link: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      }, benchmark(tableName));

      await queryInterface.addConstraint(tableName, ['profile_link'], {
        type: 'unique',
        name: 'unique_profile_link',
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
