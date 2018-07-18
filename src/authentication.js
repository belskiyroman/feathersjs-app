const authentication = require('@feathersjs/authentication');
const jwt = require('@feathersjs/authentication-jwt');
const local = require('@feathersjs/authentication-local');
const oauth2 = require('@feathersjs/authentication-oauth2');
const GoogleStrategy = require('passport-google-oauth20');
const { oauthHandler } = require('./hooks');

module.exports = function (app) {
  const config = app.get('authentication');
  const handler = oauthHandler(app);

  // Set up authentication with the secret
  app.configure(authentication(config));
  app.configure(jwt(/*{
    service: {
      get: id => app.models.User.findById(id)
    }
  }*/));
  app.configure(local());

  app.configure(oauth2(Object.assign({
    name: 'google',
    Strategy: GoogleStrategy,
    handler: handler(config.google.successRedirect),
  }, config.google)));

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(config.strategies)
      ],
      remove: [
        authentication.hooks.authenticate('jwt')
      ]
    }
  });
};
