// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const { currencies: data } = require('../app-seeds');

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
    updatedAt: false,
    createdAt: false,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      },
      afterBulkSync() {
        Currency
          .sync({ force: true })
          .then(() => Currency.bulkCreate(data));
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  Currency.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return Currency;
};
