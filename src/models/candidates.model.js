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
      type: DataTypes.TEXT,
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
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
    },
    companyLocationId: {
      field: 'company_location_id',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    positionId: {
      field: 'position_id',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    statusId: {
      field: 'status_id',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currencyId: {
      field: 'currency_id',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sourceId: {
      field: 'source_id',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    levelId: {
      field: 'level_id',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'candidates',
    underscoredAll: true,
    underscored: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
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

    Candidate.belongsToMany(models.User, {
      as: 'connectedUsers',
      through: models.CandidatesUsers,
      foreignKey: 'candidate_id',
      otherKey: 'user_id',
    });
    Candidate.belongsToMany(models.InteractionType, {
      as: 'interactions',
      through: models.CandidatesInteractions,
      foreignKey: 'candidate_id',
      otherKey: 'interaction_type_id',
      onDelete: 'CASCADE',
    });
    Candidate.belongsToMany(models.Skill, {
      as: 'skills',
      through: models.CandidatesSkills,
      foreignKey: 'candidate_id',
      otherKey: 'skill_id',
    });
    Candidate.hasMany(models.CandidatesPublicProfile, {
      as: 'profiles',
      foreignKey: {
        name: 'candidate_id',
      },
      onDelete: 'CASCADE',
    });
    Candidate.belongsTo(models.CompanyLocation, {
      as: 'location',
      foreignKey: 'company_location_id',
    });
    Candidate.belongsTo(models.Position, {
      as: 'position',
      foreignKey: 'position_id',
    });
    Candidate.belongsTo(models.Status, {
      as: 'status',
      foreignKey: 'status_id',
    });
    Candidate.belongsTo(models.Currency, {
      as: 'currency',
      foreignKey: 'currency_id',
    });
    Candidate.belongsTo(models.Source, {
      as: 'source',
      foreignKey: 'source_id',
    });
    Candidate.belongsTo(models.Level, {
      as: 'level',
      foreignKey: 'level_id',
    });
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return Candidate;
};
