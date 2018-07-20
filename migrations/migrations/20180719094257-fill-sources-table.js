'use strict';
const tableName = 'sources';
const { benchmark, errorHandler } = require('../common/index');
const data = [
  { id: 1, created_at: new Date(), source: 'any' },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert(tableName, data, benchmark(tableName));
    } catch (e) {
      errorHandler(e);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      const ids = data.map(item => item.id);
      await queryInterface.bulkDelete(tableName, {id: {$in: ids}}, benchmark(tableName));
    } catch (e) {
      errorHandler(e);
    }
  }
};
