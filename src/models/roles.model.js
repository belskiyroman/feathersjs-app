// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const { roles: data } = require('../app-seeds');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const Role = sequelizeClient.define('Role', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    role: {
      field: 'role',
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    }
  }, {
    tableName: 'roles',
    underscoredAll: true,
    underscored: true,
    updatedAt: false,
    createdAt: false,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      },
      afterBulkSync() {
        Role
          .sync({ force: true })
          .then(() => Role.bulkCreate(data));
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  Role.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return Role;
};
