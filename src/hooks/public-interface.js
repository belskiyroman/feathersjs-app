// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const _ = require('underscore');

// eslint-disable-next-line no-unused-vars
module.exports = function (...fields) {
  return async context => {
    context.result = _.pick(context.result, fields);
    return context;
  };
};
