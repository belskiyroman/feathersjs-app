const { SUPER_ADMIN, ADMIN } = require('../../constants/roles.const');

const {
  acl,
  ignoreNativeCall,
  convertToPlain,
  deleteForeignKeys,
  includeAssociations,
} = require('../../hooks');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      includeAssociations({ all: true }),
    ],
    update: [
      includeAssociations({ all: true }),
    ],
    patch: [
      includeAssociations({ all: true }),
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
        deleteForeignKeys()
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
