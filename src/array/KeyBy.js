const keyBy = (arr, key) => {
  const keyBy = (array, k) =>
    (array || []).reduce((r, x) => ({ ...r, [k ? x[k] : x]: x }), {});

  return arr.isArray ? keyBy(arr, key) : Object.values(keyBy(arr, key));
};

export default keyBy