const takeEnd = (arr, i = 1) => {
  if (i === 0) {
    return arr.slice(arr.length);
  } else {
    return arr.slice(-i);
  }
};

export default takeEnd