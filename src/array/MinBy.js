const makeSelect = (comparator) => (a, b) => (comparator(a, b) ? a : b);

const minBy = (arr, by) => {
  const minByValue = makeSelect((a, b) => a[by] <= b[by]);
  return arr.reduce(minByValue, {});
};

export default minBy