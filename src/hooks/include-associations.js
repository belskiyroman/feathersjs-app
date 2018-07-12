// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = { raw: false, include: [] }) {
  const { raw, include: includeDefault } = options;

  return async context => {
    const { params, service } = context;

    if (params.query && params.query.include) {
      const associations = service.Model.associations;
      const include = params.query.include
        .map(name => associations[name])
        .filter(Boolean)
        .concat(includeDefault);

      params.sequelize = { raw, include };
      delete params.query.include;
    }

    return context;
  };
};
