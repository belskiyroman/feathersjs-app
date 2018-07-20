// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const { roles } = require('../constants');

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
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
    },
    roleId: {
      field: 'role_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: roles.GHOST,
    },
    levelId: {
      field: 'level_id',
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    positionId: {
      field: 'position_id',
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    tableName: 'users',
    underscoredAll: true,
    underscored: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    indexes: [{
      unique: true,
      fields: ['email'],
    }],
    name: {
      singular: 'User',
      plural: 'Users',
    },
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  User.associate = function (models) {

    User.belongsToMany(models.Candidate, {
      as: 'connectedCandidates',
      through: models.CandidatesUsers,
      foreignKey: 'candidate_id',
      otherKey: 'user_id',
    });
    User.belongsTo(models.Role, {
      as: 'role',
      foreignKey: 'role_id',
    });
    User.belongsTo(models.Level, {
      as: 'level',
      foreignKey: 'level_id',
    });
    User.belongsTo(models.Position, {
      as: 'position',
      foreignKey: 'position_id',
    });

    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return User;
};
