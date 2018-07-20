// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const errors = require('@feathersjs/errors');

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const { app, params, data } = context;
    const { skills: skillsList = [], profiles: profilesList = [] } = data;
    const { Skill, Candidate } = app.get('sequelizeClient').models;
    const { skills, profiles } = Candidate.associations;

    try {
      const skillsCollection = await Promise.all(skillsList.map(
        skill => Skill
          .upsert({ skill }, { returning: true })
          .then(res => res[0].toJSON())
      ));

      params.sequelize = params.sequelize || { include: [] };
      params.sequelize.include.push(skills, profiles);

      context.data = {
        ...data,
        skills: skillsCollection,
        profiles: profilesList.map(profileLink => ({ profileLink })),
      };
    } catch (e) {
      throw e;
    }

    return context;
  };
};
