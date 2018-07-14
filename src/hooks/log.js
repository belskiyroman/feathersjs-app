// A hook that logs service method before, after and error
// See https://github.com/winstonjs/winston for documentation
// about the logger.
const logger = require('../logger');

// To see more detailed messages, uncomment the following line:
// logger.level = 'debug';

module.exports = function (marker = '') {
  return context => {
    // This debugs the service call and a stringified version of the hook context
    // You can customize the message (and logger) to your needs
    logger.debug('============================================================================');
    logger.debug(`${marker}: ${context.type}, ${context.params.provider || 'native'} provired, app.service('${context.path}').${context.method}()`);

    if(typeof context.toJSON === 'function' && logger.level === 'debug') {
      logger.debug('Hook Context', context);
    }

    if (context.error) {
      logger.error(`${marker} ${context.error.stack}`);
    }

    logger.debug('============================================================================\n');
  };
};
