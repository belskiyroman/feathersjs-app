// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const { method, result} = context;
    const plainer = model => model.toJSON ? model.toJSON() : model;

    if (!result) {
      return context;
    }

    if (Array.isArray(result)) {
      context.dispatch = result.map(plainer);
    } else if (result.data && method === 'find') {
      context.dispatch = { ...result, data: result.data.map(plainer) };
    } else {
      context.dispatch = plainer(result);
    }

    context.result = context.dispatch;
    return context;
  };
};
