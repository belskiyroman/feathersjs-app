// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const _ = require('underscore');

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {

  return async context => {

    if (context.params.authenticated && context.id === 'me') {
      context.result = _.pick(context.params.user, options.publicFields);
    }

    return context;
  };
};
