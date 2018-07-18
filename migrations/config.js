const app = require('../src/app');
const env = process.env.NODE_ENV || 'development';
const { database, username, password, host } = app.get('postgres');

const config = {
  development: {
    host,
    database,
    username,
    password,
    dialect: 'postgres',
    migrationStorageTableName: '_migrations'
  },
  production: {
    host,
    database,
    username,
    password,
    dialect: 'postgres',
    migrationStorageTableName: '_migrations'
  },
  test: {
    host,
    database,
    username,
    password,
    dialect: 'postgres',
    migrationStorageTableName: '_migrations'
  },
};

module.exports = config[env];
