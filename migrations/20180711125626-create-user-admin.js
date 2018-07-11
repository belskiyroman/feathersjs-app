'use strict';

const crypto = require('crypto');
const hasher = require('@feathersjs/authentication-local/lib/utils/hash');

const tableName = 'users';

const { benchmark } = require('./common');
const google_id = crypto.createHash('sha1').update(Date.now().toString()).digest('hex');
const data = [
  {
    id: 1,
    email: 'admin@hrportal.com',
    password: 'adminhrportal',
    google_id,
    first_name: 'Admin',
    last_name: 'Super',
    created_at: new Date(),
    updated_at: new Date(),
    role_id: 1,
  }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    data[0].password = await hasher(data[0].password);
    return queryInterface.bulkInsert(tableName, data, benchmark(tableName));
  },

  down: async (queryInterface, Sequelize) => {
    const ids = data.map(item => item.id);
    return queryInterface.bulkDelete(tableName, { id: { $in: ids } });
  }
};
