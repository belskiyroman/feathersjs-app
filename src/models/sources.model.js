// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const Source = sequelizeClient.define('Source', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    source: {
      field: 'source',
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'sources',
    underscoredAll: true,
    underscored: true,
    createdAt: 'createdAt',
    updatedAt: false,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  Source.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return Source;
};
