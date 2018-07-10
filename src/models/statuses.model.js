// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

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
      type: DataTypes.STRING,
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
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  Status.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  Status
    .sync({ force: true })
    .then(() => Status.bulkCreate({
      records: [
        { id: 1, status: 'fired' },
        { id: 2, status: 'accepted' },
        { id: 3, status: 'interns' },
        { id: 4, status: 'interview' },
        { id: 5, status: 'new' },
        { id: 6, status: 'no hire' },
        { id: 7, status: 'reserve' },
        { id: 8, status: 'hire' },
        { id: 9, status: 'test '}
      ]
    }));

  return Status;
};
