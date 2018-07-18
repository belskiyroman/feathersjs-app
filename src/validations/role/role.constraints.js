const base = {};

const create = {
  value: {
    presence: true,
    length: { minimum: 2 },
  },
};

module.exports = {
  base,
  create,
};
