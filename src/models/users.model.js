// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const User = sequelizeClient.define('User', {

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    googleId: {
      type: DataTypes.STRING,
    },
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    roleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    levelId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    positionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    tableName: 'users',
    underscoredAll: true,
    underscored: true,
    indexes: [{
      unique: true,
      fields: ['email'],
    }],
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  User.associate = function (models) {
    User.belongsTo(models.Role, {
      foreignKey: {
        name: 'roleId',
        allowNull: true,
      },
    });
    User.belongsTo(models.Level, {
      foreignKey: {
        name: 'levelId',
        allowNull: true,
      },
    });
    User.belongsTo(models.Position, {
      foreignKey: {
        name: 'positionId',
        allowNull: true,
      },
    });
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return User;
};
