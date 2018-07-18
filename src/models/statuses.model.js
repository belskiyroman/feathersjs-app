// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const { statuses: data } = require('../app-seeds');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const Status = sequelizeClient.define('Status', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      field: 'status',
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    }
  }, {
    tableName: 'statuses',
    underscoredAll: true,
    underscored: true,
    updatedAt: false,
    createdAt: false,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      },
      afterBulkSync() {
        console.log('start');
        Status
          .sync({ force: true })
          .then(() => Status.bulkCreate(data))
          .then(() => console.log('finish'));
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  Status.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return Status;
};
