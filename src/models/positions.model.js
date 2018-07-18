// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const Position = sequelizeClient.define('Position', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    position: {
      field: 'position',
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'positions',
    underscoredAll: true,
    underscored: true,
    updatedAt: false,
    createdAt: 'createdAt',
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  Position.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return Position;
};
