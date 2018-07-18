'use strict';
const tableName = 'currencies';
const { benchmark, errorHandler } = require('../common/index');
const { currencies: data } = require('../../src/app-seeds/index');

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
