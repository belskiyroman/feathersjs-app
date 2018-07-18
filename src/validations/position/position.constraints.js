const base = {};

const create = {
  id: {
    numericality: true,
  },
  value: {
    presence: true,
    length: { minimum: 2 },
  },
};

module.exports = {
  base,
  create,
};
