'use strict';
const tableName = 'roles';

const { benchmark } = require('./common');

const data = [
  { id: 1, role: 'super admin' },
  { id: 2, role: 'admin' },
  { id: 3, role: 'hr' },
  { id: 4, role: 'expert' },
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
