const includeAssociations = require('../../hooks/include-associations');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      includeAssociations(),
    ],
    update: [
      includeAssociations(),
    ],
    patch: [
      includeAssociations(),
    ],
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
