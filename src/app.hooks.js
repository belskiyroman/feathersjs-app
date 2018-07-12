// Applications that run for every service
const { authenticate } = require('@feathersjs/authentication').hooks;
const log = require('./hooks/log');

module.exports = {
  before: {
    all: [
      log('app'),
      context => {
        if (context.path === 'users' && context.method === 'create') {
          return context;
        }
        return authenticate('jwt')(context);
      },
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
