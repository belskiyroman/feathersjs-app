'use strict';

const tableName = 'statuses';

const { benchmark } = require('./common');

const data = [
  { id: 1, status: 'fired' },
  { id: 2, status: 'accepted' },
  { id: 3, status: 'interns' },
  { id: 4, status: 'interview' },
  { id: 5, status: 'new' },
  { id: 6, status: 'no hire' },
  { id: 7, status: 'reserve' },
  { id: 8, status: 'hire' },
  { id: 9, status: 'test '}
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
