const intersect = (arr) => {
  return arr.reduce((a, b) => a.filter((c) => b.includes(c)));
};

export default intersect