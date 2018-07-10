// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

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
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  Role.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  // Role
  //   .sync({ force: true })
  //   .then(() => Role.bulkCreate({
  //     records: [
  //       { id: 1, role: 'admin' },
  //       { id: 2, role: 'hr' },
  //       { id: 3, role: 'expert' },
  //     ]
  //   }))
  //   .catch((e) => console.log('Roles: ', e));

  return Role;
};
