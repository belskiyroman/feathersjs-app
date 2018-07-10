// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const Currency = sequelizeClient.define('Currency', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    currencyName: {
      field: 'currency_name',
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    currencySymbol: {
      field: 'currency_symbol',
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    }
  }, {
    tableName: 'currencies',
    underscoredAll: true,
    underscored: true,
    createdAt: false,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  Currency.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  Currency
    .sync({ force: true })
    .then(() => Currency.bulkCreate({
      records: [
        { id: 1, currencyName: 'USD', currencySymbol: '$' },
        { id: 2, currencyName: 'EUR', currencySymbol: '€' },
        { id: 3, currencyName: 'UAH', currencySymbol: '₴' },
        { id: 4, currencyName: 'BYN', currencySymbol: 'BYN' },
      ]
    }));

  return Currency;
};
