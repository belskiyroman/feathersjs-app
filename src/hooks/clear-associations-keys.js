// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const { service, method } = context;
    let result = method === 'find' ? context.result.data : context.result;
    result = result instanceof service.Model ? result.toJSON() : result;

    Object
      .values(service.Model.associations)
      .forEach(model => delete result[model.foreignKey]);

    if (method === 'find') {
      context.result.data = result;
    } else {
      context.result = result;
    }

    return context;
  };
};
