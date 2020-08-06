const size = (arr) => {
  if (arr.isArray) return arr.length;
  return Object.keys(arr).length;
};

export default size;