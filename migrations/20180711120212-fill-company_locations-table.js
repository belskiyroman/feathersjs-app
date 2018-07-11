'use strict';

const tableName = 'company_locations';

const { benchmark } = require('./common');

const data = [
  { id: 1, location: 'Гродно' },
  { id: 2, location: 'Минск' },
  { id: 3, location: 'Днепр' },
  { id: 4, location: 'Аликанте' },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(tableName, data, benchmark(tableName));
  },

  down: async (queryInterface, Sequelize) => {
    const ids = data.map(item => item.id);
    return queryInterface.bulkDelete(tableName, { id: { $in: ids } });
  }
};
