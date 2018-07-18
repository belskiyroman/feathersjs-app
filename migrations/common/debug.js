const debug = require('debug')('db:migrate');

module.exports.errorHandler = e => {
  debug('message: ', e.message);
  e.original && debug('detail: ', e.original && e.original.detail);
  e.errors && debug(e.errors);
  e.stack && debug(e.stack);
  throw e;
};

module.exports.logging = marker =>
  (sql, benchmark, conf) => {
    debug(`${conf.type} ${marker} ${conf.benchmark ? benchmark + 'ms' : ''}: `);
    debug(sql);
  };
