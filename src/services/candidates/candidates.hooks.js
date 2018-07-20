const { SUPER_ADMIN, ADMIN } = require('../../constants/roles.const');

const {
  acl,
  ignoreNativeCall,
  convertToPlain,
  deleteForeignKeys,
  includeAssociations,
  candidateCreate,
} = require('../../hooks');

module.exports = {
  before: {
    all: [],
    find: [
      includeAssociations(),
    ],
    get: [
      includeAssociations(),
    ],
    create: [
      candidateCreate(),
      includeAssociations({ include: ['skills', 'profiles'] }),
    ],
    update: [
      includeAssociations({ include: ['skills', 'profiles'] }),
    ],
    patch: [
      includeAssociations({ include: ['skills', 'profiles'] }),
    ],
    remove: [
      acl({
        roles: [SUPER_ADMIN, ADMIN]
      })
    ]
  },

  after: {
    all: [
      ignoreNativeCall(
        convertToPlain(),
        // deleteForeignKeys()
      )
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
