'use strict';

const tableName = 'levels';

const { benchmark } = require('./common');

const data = [
  { id: 1, level: 'trainee' },
  { id: 2, level: 'trainee' },
  { id: 3, level: 'trainee' },
  { id: 4, level: 'trainee' },
  { id: 5, level: 'trainee' },
  { id: 6, level: 'trainee' },
  { id: 7, level: 'trainee' },
  { id: 8, level: 'junior' },
  { id: 9, level: 'junior' },
  { id: 10, level: 'junior' },
  { id: 11, level: 'middle' },
  { id: 12, level: 'middle' },
  { id: 13, level: 'middle' },
  { id: 14, level: 'senior' },
  { id: 15, level: 'senior' },
  { id: 16, level: 'senior' },
  { id: 17, level: 'team lead' },
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
