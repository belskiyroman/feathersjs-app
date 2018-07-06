// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const Interaction = sequelizeClient.define('Interaction', {
    candidateId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    interactionTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    interactionDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    tableName: 'interactions',
    underscoredAll: true,
    underscored: true,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  Interaction.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return Interaction;
};
