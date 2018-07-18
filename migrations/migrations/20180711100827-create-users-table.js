'use strict';
const tableName = 'users';
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
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        google_id: {
          type: Sequelize.STRING,
        },
        first_name: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        last_name: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        photo: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        created_at: {
          type: Sequelize.DATE
        },
        updated_at: {
          type: Sequelize.DATE
        },
        role_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'roles',
            key: 'id'
          },
        },
        level_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'levels',
            key: 'id'
          },
        },
        position_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'positions',
            key: 'id'
          },
        },
      }, benchmark(tableName));

      await queryInterface.addConstraint(tableName, ['email'], {
        type: 'unique',
        name: 'unique_user_email',
      }, benchmark(tableName));

      await queryInterface.addIndex(tableName, {
        fields: ['email', 'google_id'],
        unique: true,
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
