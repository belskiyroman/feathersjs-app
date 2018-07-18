// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const validate = require('validate.js');
const errors = require('@feathersjs/errors');

// eslint-disable-next-line no-unused-vars
module.exports = function (constraints = {}) {
  return async context => {
    const validationErrors = validate(context.data, constraints);

    if (validationErrors) {
      throw new errors.BadRequest(validationErrors);
    }

    return context;
  };
};
