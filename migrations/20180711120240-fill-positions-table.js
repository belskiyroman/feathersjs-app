'use strict';

const tableName = 'positions';

const { benchmark } = require('./common');

const data = [
  { id: 1, created_at: new Date(), position: '.NET' },
  { id: 2, created_at: new Date(), position: '1С' },
  { id: 3, created_at: new Date(), position: 'Analyst' },
  { id: 4, created_at: new Date(), position: 'Android' },
  { id: 5, created_at: new Date(), position: 'Blockchain' },
  { id: 6, created_at: new Date(), position: 'C++' },
  { id: 7, created_at: new Date(), position: 'Data Science' },
  { id: 8, created_at: new Date(), position: 'DBA' },
  { id: 9, created_at: new Date(), position: 'Delphi' },
  { id: 10, created_at: new Date(), position: 'DevOps' },
  { id: 11, created_at: new Date(), position: 'Embedded' },
  { id: 12, created_at: new Date(), position: 'ERP/CRM' },
  { id: 13, created_at: new Date(), position: 'Flash/Flex' },
  { id: 14, created_at: new Date(), position: 'FP' },
  { id: 15, created_at: new Date(), position: 'Front End' },
  { id: 16, created_at: new Date(), position: 'Golang' },
  { id: 17, created_at: new Date(), position: 'HR' },
  { id: 18, created_at: new Date(), position: 'iOS/macOS' },
  { id: 19, created_at: new Date(), position: 'Java' },
  { id: 20, created_at: new Date(), position: 'Node.js' },
  { id: 21, created_at: new Date(), position: 'Other' },
  { id: 22, created_at: new Date(), position: 'Perl' },
  { id: 23, created_at: new Date(), position: 'PHP' },
  { id: 24, created_at: new Date(), position: 'Product Manager' },
  { id: 25, created_at: new Date(), position: 'Project Manager' },
  { id: 26, created_at: new Date(), position: 'Python' },
  { id: 27, created_at: new Date(), position: 'QA' },
  { id: 28, created_at: new Date(), position: 'Ruby' },
  { id: 29, created_at: new Date(), position: 'Sales' },
  { id: 30, created_at: new Date(), position: 'Scala' },
  { id: 31, created_at: new Date(), position: 'Security' },
  { id: 32, created_at: new Date(), position: 'SEO' },
  { id: 33, created_at: new Date(), position: 'Support' },
  { id: 34, created_at: new Date(), position: 'Technical Writer' },
  { id: 35, created_at: new Date(), position: 'Unity' },
  { id: 36, created_at: new Date(), position: 'Design' },
  { id: 37, created_at: new Date(), position: 'Marketing' },
  { id: 38, created_at: new Date(), position: 'System Administrator' },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(tableName, data, benchmark(tableName));
  },

  down: async (queryInterface, Sequelize) => {
    const ids = data.map(item => item.id);
    return queryInterface.bulkDelete(tableName, { id: { $in: ids } });
  }
};
