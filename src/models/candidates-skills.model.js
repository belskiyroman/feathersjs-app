// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const CandidatesSkills = sequelizeClient.define('CandidatesSkills', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    candidateId: {
      field: 'candidate_id',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    skillId: {
      field: 'skill_id',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'candidates_skills',
    underscoredAll: true,
    underscored: true,
    updatedAt: false,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  CandidatesSkills.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return CandidatesSkills;
};
