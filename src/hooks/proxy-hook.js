// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  const { hook, exclude } = options;
  const excludeHooks = exclude.map(method => method.toLowerCase());

  if (typeof hook !== 'function' || !Array.isArray(exclude)) {
    throw new Error('You must pass a hook function and an array of exclude the hooks methods of the service.');
  }

  return async context => {

    if (excludeHooks.indexOf(context.method) === -1) {
      return context;
    }

    return hook(context);
  };
};
