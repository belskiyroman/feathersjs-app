// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const { data = {}, params = {} } = context;
    const provider = params.oauth ? params.oauth.provider : params.provider;

    switch (provider) {
    case 'google': {
      context.data = {
        googleId: data.googleId,
        email: data.google.profile.emails.find(mail => mail.type === 'account').value,
        password: data.google.accessToken,
        firstName: data.google.profile.name.givenName,
        lastName: data.google.profile.name.familyName,
        photo: data.google.profile.photos[0].value,
      };
      const user = await context.service.Model.findOne({ where: { email: context.data.email } });

      if (user) {
        user.setDataValue('googleId', context.data.googleId);
        !user.photo && user.setDataValue('photo', context.data.photo);
        context.result  = await user.save();
      }
      break;
    }
    case 'rest':
      context.data = {
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        photo: data.photo,
      };
      break;
    }

    return context;
  };
};
