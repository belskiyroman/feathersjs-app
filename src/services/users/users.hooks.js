const { hashPassword, protect } = require('@feathersjs/authentication-local').hooks;

const userAuthAdapter = require('../../hooks/user-auth-adapter');
const oauthLogin = require('../../hooks/oauth-login');
const currentUserAliasId = require('../../hooks/user-alias-me-id');
const convertToPlain = require('../../hooks/convert-to-plain');
const ignoreNativeCall = require('../../hooks/ignore-native-call');
const includeAssociations = require('../../hooks/include-associations');
const deleteForeignKeys = require('../../hooks/delete-foreign-keys');

module.exports = {
  before: {
    all: [
      currentUserAliasId('me'),
      includeAssociations(),
    ],
    find: [],
    get: [],
    create: [
      userAuthAdapter(),
      hashPassword(),
      oauthLogin({ google: 'googleId' })
    ],
    update: [
      hashPassword(),
    ],
    patch: [
      hashPassword(),
    ],
    remove: []
  },

  after: {
    all: [
      ignoreNativeCall(
        convertToPlain(),
        protect('password'),
        deleteForeignKeys()
      ),
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
