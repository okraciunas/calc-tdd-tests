const sum = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0);
};

const sub = (...args) => {
  const num = args.length > 0 ? args.shift() : 0;
  return args.reduce((acc, curr) => acc - curr, num);
};

const mult = (...args) => {
  const num = args.length > 0 ? args.shift() : 0;
  return args.reduce((acc, curr) => acc * curr, num);
};

const div = (...args) => {
  const num = args.length > 0 ? args.shift() : 0;
  return args.reduce((acc, curr) => {
    if (curr === 0) return "Não é possível realizar uma divisão por 0.";

    return acc / curr;
  }, num);
};

module.exports = {
  sum,
  sub,
  mult,
  div
};
