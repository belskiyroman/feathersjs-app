// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const compareString = (a, b) => a.toLowerCase() === b.toLowerCase();
const strategies = {
  localHookComparator: actionType =>
    method => compareString(actionType,method),
  globalHookComparator: (actionType, path) =>
    ({ service, method}) => compareString(service, path) && compareString(actionType, method),
};

// eslint-disable-next-line no-unused-vars
module.exports = function (hook, exclude = []) {
  const comparator = typeof exclude[0] === 'string'
    ? strategies.localHookComparator
    : strategies.globalHookComparator;

  return async context => {
    const { method, path } = context;
    const isExclude = exclude.some(comparator(method, path));

    if (isExclude) {
      return context;
    }

    return hook(context);
  };
};
