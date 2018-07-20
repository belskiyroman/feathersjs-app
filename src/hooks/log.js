// A hook that logs service method before, after and error
// See https://github.com/winstonjs/winston for documentation
// about the logger.

const debug = require('debug');

// To see more detailed messages, uncomment the following line:
// logger.level = 'debug';

module.exports = function (marker = '') {
  const logger = debug('hook:' + marker);
  return context => {
    // This debugs the service call and a stringified version of the hook context
    // You can customize the message (and logger) to your needs
    logger('============================================================================');
    logger(`context.type: ${context.type}, provider: ${context.params.provider || (context.params.oauth && context.params.oauth.provider) || 'native'}, app.service('${context.path}').${context.method}()`);

    if(typeof context.toJSON === 'function' && logger.level === 'info') {
      logger('Hook Context:');
      logger(context);
    }

    if (context.error) {
      logger(context.error.stack);
    }

    logger('============================================================================\n');
  };
};
