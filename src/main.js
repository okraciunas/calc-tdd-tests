const sum = (...args) => {
  return args.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

module.exports = {
  sum,
  sub: _ => _,
  mult: _ => _,
  div: _ => _
};
