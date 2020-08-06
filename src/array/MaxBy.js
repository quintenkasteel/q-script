const makeSelect = (comparator) => (a, b) => (comparator(a, b) ? a : b);

const maxBy = (arr, by) => {
  const maxByValue = makeSelect((a, b) => a[by] >= b[by]);
  return arr.reduce(maxByValue, {});
};

export default maxBy;
