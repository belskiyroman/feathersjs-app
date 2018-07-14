// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = { all: false, raw: true, include: [] }) {
  const { all, raw, include: includeDefault } = options;

  return async context => {
    const { params, service } = context;
    const associations = service.Model.associations;
    let include = all ? Object.values(associations) : [];

    if (params.query && params.query.include) {
      include = all ? include : params.query.include
        .map(name => associations[name])
        .filter(Boolean)
        .concat(includeDefault);

      delete params.query.include;
    }

    params.sequelize = { raw, include };
    return context;
  };
};
