const { SUPER_ADMIN } = require('../../constants/roles.const');
const { acl } = require('../../hooks');

module.exports = {
  before: {
    all: [
      acl({
        roles: [SUPER_ADMIN]
      })
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
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
