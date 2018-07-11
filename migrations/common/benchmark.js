const logging = require('./logging');

module.exports = marker => ({
  benchmark: true,
  logging: logging(marker),
});
