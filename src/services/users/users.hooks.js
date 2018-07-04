const { authenticate } = require('@feathersjs/authentication').hooks;

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

const userAuthAdapter = require('../../hooks/user-auth-adapter');

const userUpsert = require('../../hooks/user-upsert');

const userProfile = require('../../hooks/user-profile');

module.exports = {
  before: {
    all: [],
    find: [
      authenticate('jwt'),
    ],
    get: [
      authenticate('jwt'),
      userProfile({ publicFields: ['id', 'email', 'firstName', 'lastName', 'photo']})
    ],
    create: [
      userAuthAdapter(),
      hashPassword(),
      userUpsert({ google: 'googleId' })
    ],
    update: [
      userAuthAdapter(),
      hashPassword(),
      userUpsert({ google: 'googleId' }),
      authenticate('jwt')
    ],
    patch: [
      hashPassword(),
      authenticate('jwt')
    ],
    remove: [
      authenticate('jwt')
    ]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
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
