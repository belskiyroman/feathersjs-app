// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const { processHooks } = require('@feathersjs/commons/lib/hooks');

// eslint-disable-next-line no-unused-vars
module.exports = function (...hooks) {
  return async context => {

    if (!context.params.provider) {
      return context;
    }

    return processHooks(hooks, context);
  };
};
