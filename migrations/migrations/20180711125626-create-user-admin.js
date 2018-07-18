'use strict';

const tableName = 'users';
const hasher = require('@feathersjs/authentication-local/lib/utils/hash');
const { benchmark, errorHandler } = require('../common/index');
const data = [
  {
    id: 1,
    email: 'admin@hrportal.com',
    password: 'adminhrportal',
    first_name: 'Admin',
    last_name: 'Super',
    created_at: new Date(),
    updated_at: new Date(),
    role_id: 1,
  }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      data[0].password = await hasher(data[0].password);
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
