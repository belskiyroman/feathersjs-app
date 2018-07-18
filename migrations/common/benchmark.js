const { logging } = require('./debug');

module.exports = marker => ({
  benchmark: true,
  logging: logging(marker),
});
