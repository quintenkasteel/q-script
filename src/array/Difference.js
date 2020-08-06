const difference = (a, b) => {
  var arrs = [a, b];
  var newarrs = arrs.reduce((a, b) => a.filter((c) => !b.includes(c)));
  return newarrs;
};

export default difference