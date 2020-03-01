const sum = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0);
};

const sub = (...args) => {
  const num = args.length > 0 ? args.shift() : 0;
  return args.reduce((acc, curr) => acc - curr, num);
};

module.exports = {
  sum,
  sub,
  mult: _ => _,
  div: _ => _
};
