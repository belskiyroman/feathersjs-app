// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const Currency = sequelizeClient.define('Currency', {
    currencyName: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    currencySymbol: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    }
  }, {
    tableName: 'currencies',
    underscoredAll: true,
    underscored: true,
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

  return Currency;
};
