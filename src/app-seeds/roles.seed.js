const { roles } = require('../constants');

module.exports = Object.entries(roles).map(pair => ({ id: pair[1], role: pair[0]}));
