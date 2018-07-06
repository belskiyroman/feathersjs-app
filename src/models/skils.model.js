// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const Skill = sequelizeClient.define('Skill', {
    skill: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    }
  }, {
    tableName: 'skills',
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
  Skill.associate = function (models) {

    Skill.belongsToMany(models.Candidate, {
      through: 'CandidatesSkills',
      foreignKey: {
        name: 'skillId',
        allowNull: false
      }
    });
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return Skill;
};
