const { statuses } = require('../constants');

module.exports = Object.entries(statuses).map(pair => ({ id: pair[1], status: pair[0]}));
