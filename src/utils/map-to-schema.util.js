const validate = require('validate.js');
const createDeepObjectValue = require('./create-deep-object-value.util');

module.exports = (data, schema) => Object
  .entries(schema)
  .reduce(
    (res, [targetKeypath, sourceKeypath]) => {
      const value = validate.getDeepObjectValue(data, sourceKeypath);
      return !value ? res : createDeepObjectValue(res, targetKeypath, value);
    },
    {}
  );
