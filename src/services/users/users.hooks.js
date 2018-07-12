const { authenticate } = require('@feathersjs/authentication').hooks;
const { hashPassword } = require('@feathersjs/authentication-local').hooks;

const log = require('../../hooks/log');

const userAuthAdapter = require('../../hooks/user-auth-adapter');
const oauthLogin = require('../../hooks/oauth-login');
const currentUserAliasId = require('../../hooks/user-alias-me-id');
const includeAssociations = require('../../hooks/include-associations');
const clearAssociationsKeys = require('../../hooks/clear-associations-keys');

module.exports = {
  before: {
    all: [
      log('user'),
      includeAssociations(),
    ],
    find: [
    ],
    get: [
      currentUserAliasId('me'),
    ],
    create: [
      userAuthAdapter(),
      hashPassword(),
      oauthLogin({ google: 'googleId' })
    ],
    update: [
      hashPassword(),
      currentUserAliasId('me'),
    ],
    patch: [
      hashPassword(),
      currentUserAliasId('me'),
    ],
    remove: [
      currentUserAliasId('me'),
    ]
  },

  after: {
    all: [
      log('user'),
      // publicInterface('id', 'email', 'firstName', 'lastName', 'photo')
      clearAssociationsKeys(),
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
