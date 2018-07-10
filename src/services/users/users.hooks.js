const { authenticate } = require('@feathersjs/authentication').hooks;

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

const userAuthAdapter = require('../../hooks/user-auth-adapter');

const oauthLogin = require('../../hooks/oauth-login');

const currentUserAliasId = require('../../hooks/user-alias-me-id');
const publicInterface = require('../../hooks/public-interface');

module.exports = {
  before: {
    all: [],
    find: [
      authenticate('jwt'),
    ],
    get: [
      authenticate('jwt'),
      currentUserAliasId('me'),
    ],
    create: [
      userAuthAdapter(),
      hashPassword(),
      oauthLogin({ google: 'googleId' })
    ],
    update: [
      hashPassword(),
      authenticate('jwt'),
      currentUserAliasId('me'),
    ],
    patch: [
      hashPassword(),
      authenticate('jwt'),
      currentUserAliasId('me'),
    ],
    remove: [
      authenticate('jwt'),
      currentUserAliasId('me'),
    ]
  },

  after: {
    all: [
      // publicInterface('id', 'email', 'firstName', 'lastName', 'photo')
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
