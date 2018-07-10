// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const Level = sequelizeClient.define('Level', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    level: {
      field: 'level',
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    tableName: 'levels',
    underscoredAll: true,
    underscored: true,
    updatedAt: false,
    createdAt: false,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  Level.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  Level
    .sync({ force: true })
    .then(() => Level.bulkCreate({
      records: [
        { id: 1, level: 'trainee' },
        { id: 2, level: 'trainee' },
        { id: 3, level: 'trainee' },
        { id: 4, level: 'trainee' },
        { id: 5, level: 'trainee' },
        { id: 6, level: 'trainee' },
        { id: 7, level: 'trainee' },
        { id: 8, level: 'junior' },
        { id: 9, level: 'junior' },
        { id: 10, level: 'junior' },
        { id: 11, level: 'middle' },
        { id: 12, level: 'middle' },
        { id: 13, level: 'middle' },
        { id: 14, level: 'senior' },
        { id: 15, level: 'senior' },
        { id: 16, level: 'senior' },
        { id: 17, level: 'team lead' },
      ]
    }));

  return Level;
};
