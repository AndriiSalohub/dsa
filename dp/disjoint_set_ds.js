// Реалізація за допомогою масиву
const initDSU = (n) => {
  const dsu = [];

  for (let i = 0; i < n; i++) {
    dsu[i] = i;
  }

  return dsu;
};

const find = (dsu, a) => {
  return dsu[a];
};

const union = (dsu, n, a, b) => {
  if (dsu[a] === dsu[b]) {
    return;
  }

  for (let i = 0; i < n; i++) {
    if (dsu[i] === dsu[a]) {
      dsu[i] = dsu[b];
    }
  }
};
