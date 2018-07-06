// Initializes the `interactions` service on path `/interactions`
const createService = require('feathers-sequelize');
const createModel = require('../../models/interactions.model');
const hooks = require('./interactions.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/interactions', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('interactions');

  service.hooks(hooks);
};
