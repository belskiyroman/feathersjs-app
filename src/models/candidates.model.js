// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const Candidate = sequelizeClient.define('Candidate', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      field: 'email',
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    salary: {
      field: 'salary',
      type: DataTypes.INTEGER,
      allowNull: true,
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
    birthday: {
      field: 'birthday',
      type: DataTypes.DATE,
      allowNull: false,
    },
    phone: {
      field: 'phone',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    skype: {
      field: 'skype',
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      field: 'description',
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
      fields: ['first_name'],
    }, {
      fields: ['last_name'],
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
      through: models.CandidatesInteractions,
      foreignKey: 'candidate_id',
      otherKey: 'interaction_type_id',
      onDelete: 'CASCADE',
    });
    Candidate.belongsToMany(models.Skill, {
      through: models.CandidatesSkills,
      foreignKey: 'candidate_id',
      otherKey: 'skill_id',
    });
    Candidate.belongsTo(models.CompanyLocation, {
      foreignKey: {
        name: 'company_location_id',
        allowNull: false
      }
    });
    Candidate.belongsTo(models.Position, {
      foreignKey: {
        name: 'position_id',
        allowNull: false
      }
    });
    Candidate.belongsTo(models.Status, {
      foreignKey: {
        name: 'status_id',
        allowNull: false
      }
    });
    Candidate.belongsTo(models.Currency, {
      foreignKey: {
        name: 'currency_id',
        allowNull: false
      }
    });
    Candidate.belongsTo(models.Source, {
      foreignKey: {
        name: 'source_id',
        allowNull: false
      }
    });
    Candidate.belongsTo(models.Level, {
      foreignKey: {
        name: 'level_id',
        allowNull: false
      }
    });
    Candidate.hasMany(models.CandidatesPublicProfile, {
      onDelete: 'CASCADE',
      foreignKey: {
        name: 'candidate_id',
        allowNull: false
      }
    });
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return Candidate;
};
