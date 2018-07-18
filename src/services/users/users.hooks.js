const { hashPassword, protect } = require('@feathersjs/authentication-local').hooks;
const { iff } = require('feathers-hooks-common');

const { GHOST, SUPER_ADMIN } = require('../../constants/roles.const');
const { user } = require('../../validations');

const {
  acl,
  validate,
  oauthLogin,
  currentUserAliasId,
  convertToPlain,
  ignoreNativeCall,
  includeAssociations,
  deleteForeignKeys,
  mapToSchema,
} = require('../../hooks');

const ifGoogleOauth = iff(
  context => context.params.oauth && context.params.oauth.provider === 'google',
  mapToSchema(user.schemas.googleOauth),
  oauthLogin({ google: 'googleId' }),
);
const ifLocalSignUp = iff(
  context => context.params && context.params.provider === 'rest',
  validate(user.constraints.create),
  mapToSchema(user.schemas.localSignUp),
);

module.exports = {
  before: {
    all: [
      currentUserAliasId('me'),
      includeAssociations(),
    ],
    find: [],
    get: [],
    create: [
      ifGoogleOauth,
      ifLocalSignUp,
      hashPassword()
    ],
    update: [
      hashPassword(),
    ],
    patch: [
      hashPassword(),
    ],
    remove: [
      acl({
        roles: [SUPER_ADMIN]
      })
    ]
  },

  after: {
    all: [
      ignoreNativeCall(
        convertToPlain(),
        protect('password', 'googleId'),
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
