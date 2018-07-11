// Initializes the `interaction_types` service on path `/interaction-types`
const createService = require('feathers-sequelize');
const createModel = require('../../models/interaction-types.model');
const hooks = require('./interaction-types.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/interaction-types', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('interaction-types');

  service.hooks(hooks);
};
