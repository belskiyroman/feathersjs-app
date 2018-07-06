// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const CandidatesPublicProfile = sequelizeClient.define('CandidatesPublicProfile', {
    candidateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profileLink: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    }
  }, {
    tableName: 'candidates_public_profiles',
    underscoredAll: true,
    underscored: true,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  CandidatesPublicProfile.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return CandidatesPublicProfile;
};
