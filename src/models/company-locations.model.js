// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const CompanyLocation = sequelizeClient.define('CompanyLocation', {
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    tableName: 'company_locations',
    underscoredAll: true,
    underscored: true,
    updatedAt: false,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  CompanyLocation.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return CompanyLocation;
};
