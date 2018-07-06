// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const Candidate = sequelizeClient.define('Candidate', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dataOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    skype: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    tableName: 'candidates',
    underscoredAll: true,
    underscored: true,
    indexes: [{
      unique: true,
      fields: ['email'],
    }, {
      fields: ['firstName'],
    }, {
      fields: ['lastName'],
    }],
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  Candidate.associate = function (models) {

    Candidate.belongsToMany(models.InteractionType, {
      through: 'CandidatesSkills',
      foreignKey: {
        name: 'candidateId',
        allowNull: false
      }
    });
    Candidate.belongsToMany(models.Skill, {
      through: 'CandidatesSkills',
      foreignKey: {
        name: 'candidateId',
        allowNull: false
      }
    });
    Candidate.belongsTo(models.CompanyLocation, {
      foreignKey: {
        name: 'companyLocationId',
        allowNull: false
      }
    });
    Candidate.belongsTo(models.Position, {
      foreignKey: {
        name: 'positionId',
        allowNull: false
      }
    });
    Candidate.belongsTo(models.Statuse, {
      foreignKey: {
        name: 'statusId',
        allowNull: false
      }
    });
    Candidate.belongsTo(models.Currency, {
      foreignKey: {
        name: 'currencyId',
        allowNull: false
      }
    });
    Candidate.belongsTo(models.Source, {
      foreignKey: {
        name: 'sourceId',
        allowNull: false
      }
    });
    Candidate.belongsTo(models.Level, {
      foreignKey: {
        name: 'levelId',
        allowNull: false
      }
    });
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return Candidate;
};
