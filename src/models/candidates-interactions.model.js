// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const CandidatesInteractions = sequelizeClient.define('CandidatesInteractions', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    candidateId: {
      field: 'candidate_id',
      type: DataTypes.INTEGER,
      allowNull: false
    },
    interactionTypeId: {
      field: 'interaction_type_id',
      type: DataTypes.INTEGER,
      allowNull: false
    },
    interactionDate: {
      field: 'interaction_date',
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    tableName: 'candidates_interactions',
    underscoredAll: true,
    underscored: true,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  CandidatesInteractions.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return CandidatesInteractions;
};
