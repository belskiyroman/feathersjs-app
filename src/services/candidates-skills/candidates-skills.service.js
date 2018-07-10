// Initializes the `candidates-skills` service on path `/candidates-skills`
const createService = require('feathers-sequelize');
const createModel = require('../../models/candidates-skills.model');
const hooks = require('./candidates-skills.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/candidates-skills', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('candidates-skills');

  service.hooks(hooks);
};
