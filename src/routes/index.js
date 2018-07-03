const userProfile = require('./users/users.route.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(userProfile);
};
