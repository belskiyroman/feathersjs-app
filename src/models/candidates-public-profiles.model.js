// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const CandidatesPublicProfile = sequelizeClient.define('CandidatesPublicProfile', {
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
    profileLink: {
      field: 'profile_link',
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'candidates_public_profiles',
    underscoredAll: true,
    underscored: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
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
