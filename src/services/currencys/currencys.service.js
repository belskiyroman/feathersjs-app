// Initializes the `currencys` service on path `/currencys`
const createService = require('feathers-sequelize');
const createModel = require('../../models/currencies.model');
const hooks = require('./currencys.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/currencys', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('currencys');

  service.hooks(hooks);
};
