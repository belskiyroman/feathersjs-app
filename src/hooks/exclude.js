// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const compareString = (a, b) => a.toLowerCase() === b.toLowerCase();
const strategies = {
  localHookComparator: methodExclude =>
    method => compareString(methodExclude, method),
  globalHookComparator: (methodExclude, serviceExclude) =>
    ({ service, method }) => compareString(serviceExclude, service) && compareString(methodExclude, method),
};

// eslint-disable-next-line no-unused-vars
module.exports = function (hook, exclude = []) {
  const comparator = typeof exclude[0] === 'string'
    ? strategies.localHookComparator
    : strategies.globalHookComparator;

  if (typeof hook !== 'function' || !Array.isArray(exclude)) {
    throw new Error('You must pass a hook function and an array of exclude the hooks methods of the service.');
  }

  return async context => {
    const { method, path } = context;
    const isExclude = exclude.some(comparator(method, path));

    if (isExclude) {
      return context;
    }

    return hook(context);
  };
};
