'use strict';

const tableName = 'candidates_public_profiles';

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
    });

    return queryInterface.addConstraint(tableName, ['profile_link'], {
      type: 'unique',
      name: 'unique_profile_link',
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName, {});
  }
};
