// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (alias) {

  return async context => {
    if (context.params.authenticated && context.id === alias) {
      context.id = context.params.user.id;
    }

    return context;
  };
};
