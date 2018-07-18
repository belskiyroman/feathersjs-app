'use strict';
const tableName = 'candidates';
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
          type: Sequelize.TEXT,
          allowNull: false,
          unique: true,
        },
        salary: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        first_name: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        last_name: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        birthday: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        phone: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        skype: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
        },
        updated_at: {
          type: Sequelize.DATE,
        },
        company_location_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'company_locations',
            key: 'id',
          },
        },
        position_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'positions',
            key: 'id',
          },
        },
        status_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'statuses',
            key: 'id',
          },
        },
        currency_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'currencies',
            key: 'id',
          },
        },
        source_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'sources',
            key: 'id',
          },
        },
        level_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'levels',
            key: 'id',
          },
        },
      }, benchmark(tableName));

      await queryInterface.addConstraint(tableName, ['email'], {
        type: 'unique',
        name: 'unique_candidate_email',
      }, benchmark(tableName));

      await queryInterface.addIndex(tableName, {
        fields: ['email'],
        unique: true,
      }, benchmark(tableName));

      await queryInterface.addIndex(tableName, {
        fields: ['first_name', 'last_name'],
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
