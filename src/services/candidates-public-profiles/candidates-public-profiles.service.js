// Initializes the `candidates_public_profiles` service on path `/candidates-public-profiles`
const createService = require('feathers-sequelize');
const createModel = require('../../models/candidates-public-profiles.model');
const hooks = require('./candidates-public-profiles.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/candidates-public-profiles', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('candidates-public-profiles');

  service.hooks(hooks);
};
