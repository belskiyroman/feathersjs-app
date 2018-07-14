// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const errors = require('@feathersjs/errors');

// eslint-disable-next-line no-unused-vars
module.exports = function (options = { roles: [], owner: true }) {
  const { roles, owner } = options;

  return async context => {
    const user = context.params.user;
    const accessByRole = roles.includes(user.role_id);
    const accessAsOwner = false; // todo: implement this feature

    if (!accessByRole && !accessAsOwner) {
      throw new errors.Forbidden('No permissions.');
    }

    return context;
  };
};
