// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (alias) {

  return async context => {
console.log('>>>>>>>> alias');
    if (context.params.authenticated && context.id === alias) {
      console.log('>>>>>>>> alias in origin', context.id);
      context.id = context.params.user.id;
      console.log('>>>>>>>> alias in ', context.id);
    }

    return context;
  };
};
