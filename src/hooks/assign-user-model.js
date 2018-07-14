// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const { service } = context.app.get('authentication');
    const { Model } = context.app.service(service);

    if (context.params && context.params.user) {
      context.params.user = await Model.findById(context.params.user.id);
    }

    return context;
  };
};
