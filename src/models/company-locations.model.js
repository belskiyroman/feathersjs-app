// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const CompanyLocation = sequelizeClient.define('CompanyLocation', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    location: {
      field: 'location',
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    tableName: 'company_locations',
    underscoredAll: true,
    underscored: true,
    updatedAt: false,
    createdAt: false,
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

  CompanyLocation
    .sync({ force: true })
    .then(() => CompanyLocation.bulkCreate({
      records: [
        { id: 1, location: 'Гродно' },
        { id: 2, location: 'Минск' },
        { id: 3, location: 'Днепр' },
        { id: 4, location: 'Аликанте' },
      ]
    }));

  return CompanyLocation;
};
