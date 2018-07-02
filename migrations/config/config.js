const app = require('../../src/app');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    dialect: 'postgres',
    url: app.get('postgres'),
    migrationStorageTableName: '_migrations'
  },
  production: {
    dialect: 'postgres',
    url: app.get('postgres'),
    migrationStorageTableName: '_migrations'
  },
  test: {
    dialect: 'postgres',
    url: app.get('postgres'),
    migrationStorageTableName: '_migrations'
  },
};

module.exports = config[env];
