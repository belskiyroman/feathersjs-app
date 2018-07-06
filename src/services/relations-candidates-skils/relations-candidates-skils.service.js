// Initializes the `relations_candidates_skils` service on path `/relations-candidates-skils`
const createService = require('feathers-sequelize');
const createModel = require('../../models/relations-candidates-skils.model');
const hooks = require('./relations-candidates-skils.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/relations-candidates-skils', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('relations-candidates-skils');

  service.hooks(hooks);
};
