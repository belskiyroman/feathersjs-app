'use strict';

const tableName = 'currencies';

const { benchmark } = require('./common');

const data = [
  { id: 1, currency_name: 'USD', currency_symbol: '$' },
  { id: 2, currency_name: 'EUR', currency_symbol: '€' },
  { id: 3, currency_name: 'UAH', currency_symbol: '₴' },
  { id: 4, currency_name: 'BYN', currency_symbol: 'BYN' },
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
