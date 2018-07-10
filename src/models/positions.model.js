// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const Position = sequelizeClient.define('Position', {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    position: {
      field: 'position',
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    }
  }, {
    tableName: 'positions',
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
  Position.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  Position
    .sync({ force: true })
    .then(() => Position.bulkCreate({
      records: [
        { id: 1, position: '.NET' },
        { id: 2, position: '1С' },
        { id: 3, position: 'Analyst' },
        { id: 4, position: 'Android' },
        { id: 5, position: 'Blockchain' },
        { id: 6, position: 'C++' },
        { id: 7, position: 'Data Science' },
        { id: 8, position: 'DBA' },
        { id: 9, position: 'Delphi' },
        { id: 10, position: 'DevOps' },
        { id: 11, position: 'Embedded' },
        { id: 12, position: 'ERP/CRM' },
        { id: 13, position: 'Flash/Flex' },
        { id: 14, position: 'FP' },
        { id: 15, position: 'Front End' },
        { id: 16, position: 'Golang' },
        { id: 17, position: 'HR' },
        { id: 18, position: 'iOS/macOS' },
        { id: 19, position: 'Java' },
        { id: 20, position: 'Node.js' },
        { id: 21, position: 'Other' },
        { id: 22, position: 'Perl' },
        { id: 23, position: 'PHP' },
        { id: 24, position: 'Product Manager' },
        { id: 25, position: 'Project Manager' },
        { id: 26, position: 'Python' },
        { id: 27, position: 'QA' },
        { id: 28, position: 'Ruby' },
        { id: 29, position: 'Sales' },
        { id: 30, position: 'Scala' },
        { id: 31, position: 'Security' },
        { id: 32, position: 'SEO' },
        { id: 33, position: 'Support' },
        { id: 34, position: 'Technical Writer' },
        { id: 35, position: 'Unity' },
        { id: 36, position: 'Design' },
        { id: 37, position: 'Marketing' },
        { id: 38, position: 'System Administrator' },
      ]
    }));

  return Position;
};
