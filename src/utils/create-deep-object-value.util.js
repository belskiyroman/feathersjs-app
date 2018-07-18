module.exports = (obj, keypath, value) => {
  keypath.split('.').reduce((acc, key, index, arr) => {
    acc[key] = arr.length - 1 === index ? value : acc[key] || {};
    return acc[key];
  }, obj);

  return obj;
};
