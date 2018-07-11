'use strict';

const tableName = 'users';

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
    });

    await queryInterface.addConstraint(tableName, ['email'], {
      type: 'unique',
      name: 'unique_user_email',
    });

    return queryInterface.addIndex(tableName, {
      fields: ['email', 'google_id'],
      unique: true,
    });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName, {});
  }
};
