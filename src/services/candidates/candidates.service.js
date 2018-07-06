// Initializes the `candidates` service on path `/candidates`
const createService = require('feathers-sequelize');
const createModel = require('../../models/candidates.model');
const hooks = require('./candidates.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/candidates', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('candidates');

  service.hooks(hooks);
};
