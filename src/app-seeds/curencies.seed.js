const { currencies, currencySymbol } = require('../constants');

module.exports = Object.entries(currencies).map(pair => ({
  id: pair[1],
  currency_name: pair[0],
  currency_symbol: currencySymbol[pair[0]] || pair[0],
}));
