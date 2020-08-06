const pluck = (arr, val) => {
  var values = arr.map(function (x) {
    return x[val];
  });
  return values;
};

export default pluck