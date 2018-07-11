// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const { data = {}, params = {} } = context;
    const provider = params.oauth && params.oauth.provider;

    if (!provider) return context;

    const user = await context.service.Model.findOne({ where: { email: data.email } });

    if (!user) return context;

    user.setDataValue(options[provider], data[options[provider]]);
    !user.photo && user.setDataValue('photo', data.photo);
    context.result  = await user.save();

    return context;
  };
};
