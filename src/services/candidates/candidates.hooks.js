const ignoreNativeCall = require('../../hooks/ignore-native-call');
const convertToPlain = require('../../hooks/convert-to-plain');
const deleteForeignKeys = require('../../hooks/delete-foreign-keys');
const includeAssociations = require('../../hooks/include-associations');

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
    remove: []
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
