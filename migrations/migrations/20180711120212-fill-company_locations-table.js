'use strict';
const tableName = 'company_locations';
const { benchmark, errorHandler } = require('../common/index');
const data = [
  { id: 1, location: 'Гродно' },
  { id: 2, location: 'Минск' },
  { id: 3, location: 'Днепр' },
  { id: 4, location: 'Аликанте' },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try{
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
