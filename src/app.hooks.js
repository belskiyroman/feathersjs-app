// Applications that run for every service
const { authenticate } = require('@feathersjs/authentication').hooks;

const log = require('./hooks/log');
const exclude = require('./hooks/exclude');
const assignUserModel = require('./hooks/assign-user-model');

module.exports = {
  before: {
    all: [
      log('app'),
      exclude(
        authenticate('jwt'), [
          { service: 'users', method: 'create' },
          { service: 'authentication', method: 'create' },
        ]
      ),
      assignUserModel(),
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [ log('app') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [ log('app') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
