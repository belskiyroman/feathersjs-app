// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const { mapToSchema } = require('../utils');

// eslint-disable-next-line no-unused-vars
module.exports = function (schema) {


  return async context => {
    context.data = mapToSchema(context.data, schema);
    return context;
  };
};
