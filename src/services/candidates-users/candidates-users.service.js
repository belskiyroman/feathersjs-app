// Initializes the `candidates-users` service on path `/candidates-users`
const createService = require('feathers-sequelize');
const createModel = require('../../models/candidates-users.model');
const hooks = require('./candidates-users.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/candidates-users', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('candidates-users');

  service.hooks(hooks);
};
