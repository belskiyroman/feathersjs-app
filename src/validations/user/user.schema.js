const toClient = {
  id: 'id',
  email: 'email',
  firstName: 'firstName',
  lastName: 'lastName',
  photo: 'photo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  roleId: 'role.id',
  role: 'role.role',
  positionId: 'position.id',
  position: 'position.position',
  levelId: 'level.id',
  level: 'level.level',
};

const fromClient = {
  id: 'id',
  email: 'email',
  password: 'password',
  firstName: 'firstName',
  lastName: 'lastName',
  photo: 'photo',
  'role.id': 'roleId',
  'role.role': 'role',
  'position.id': 'positionId',
  'position.position': 'position',
  'level.id': 'levelId',
  'level.level': 'level',
};

const googleOauth = {
  googleId: 'googleId',
  email: 'google.profile.emails.0.value',
  password: 'google.accessToken',
  firstName: 'google.profile.name.givenName',
  lastName: 'google.profile.name.familyName',
  photo: 'google.profile.photos.0.value',
};

const localSignUp = {
  email: 'email',
  password: 'password',
  firstName: 'firstName',
  lastName: 'lastName',
  photo: 'photo',
};

module.exports = {
  toClient,
  fromClient,
  googleOauth,
  localSignUp,
};
