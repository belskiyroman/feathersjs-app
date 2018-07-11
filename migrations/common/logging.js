module.exports = (marker) =>
  (sql, benchmark, conf) => console.log(`${conf.type} ${marker} ${conf.benchmark ? benchmark + 'ms' : ''}: `, sql);
