const { levels } = require('../constants');

module.exports = Object.entries(levels).map(pair => ({ id: pair[1], level: pair[0]}));
