// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const _ = require('underscore');

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const { service, method } = context;
    const isFind = method === 'find';
    const data = isFind ? context.result.data : [context.result];

    const foreignKeys = Object
      .values(service.Model.associations)
      .map(model => model.foreignKey);

    const result = data
      .map(model => _.omit(model, foreignKeys));

    if (isFind) {
      context.result.data = result;
    } else {
      context.result = result[0];
    }

    context.dispatch = context.result;
    return context;
  };
};

