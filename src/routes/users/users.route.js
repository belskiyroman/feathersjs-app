const _ = require('underscore');
const publicFields = [
  'id',
  'email',
  'firstName',
  'lastName',
  'photo',
];

module.exports = function (app) {
  app.get('/user-profile',
    app.authenticate('jwt'),
    (req, res) => res.send(_.pick(req.user, publicFields))
  );
};

