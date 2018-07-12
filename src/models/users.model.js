// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const User = sequelizeClient.define('User', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      field: 'email',
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      field: 'password',
      type: DataTypes.STRING,
      allowNull: false
    },
    googleId: {
      field: 'google_id',
      type: DataTypes.STRING,
    },
    firstName: {
      field: 'first_name',
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastName: {
      field: 'last_name',
      type: DataTypes.TEXT,
      allowNull: false,
    },
    photo: {
      field: 'photo',
      type: DataTypes.TEXT,
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
      as: 'role',
      foreignKey: {
        name: 'role_id',
        allowNull: false,
      },
      otherKey: 'id'
    });
    User.belongsTo(models.Level, {
      as: 'level',
      foreignKey: {
        name: 'level_id',
        allowNull: true,
      },
    });
    User.belongsTo(models.Position, {
      as: 'position',
      foreignKey: {
        name: 'position_id',
        allowNull: true,
      },
    });

    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return User;
};
