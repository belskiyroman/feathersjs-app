const { SUPER_ADMIN, ...roles } = require('../../constants/roles.const');

const base = {
  id: {
    presence: true,
    numericality: true,
  },
  email: {
    presence: true,
    email: true,
  },
  firstName: {
    presence: true,
    length: { minimum: 2 },
  },
  lastName: {
    presence: true,
    length: { minimum: 2 },
  },
  photo: {
    url: true,
  },
};

const create = {
  email: {
    presence: true,
    email: true,
  },
  password: {
    presence: true,
  },
  firstName: {
    presence: true,
    length: { minimum: 2 },
  },
  lastName: {
    presence: true,
    length: { minimum: 2 },
  },
  photo: {
    url: true,
  },
};

const includeRole = {
  roleId: {
    presence: true,
    inclusion: Object.values(roles),
  },
  role: {
    presence: true,
    length: { minimum: 2 },
  },
};

const includeLevel = {
  levelId: {
    presence: true,
    numericality: true,
  },
  level: {
    presence: true,
    length: { minimum: 2 },
  },
};

const includePosition = {
  positionId: {
    presence: true,
    numericality: true,
  },
  position: {
    presence: true,
    length: { minimum: 2 },
  },
};

module.exports = {
  base,
  create,
  includeRole,
  includeLevel,
  includePosition,
};
