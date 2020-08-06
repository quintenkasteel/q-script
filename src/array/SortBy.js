const sortBy = (arr, key, type) => {
  const ascOrDec = (num) => (type === "dec" ? num * -1 : num);
  const sorting = arr
    .concat()
    .sort((a, b) =>
      a[key] > b[key] ? ascOrDec(1) : b[key] > a[key] ? ascOrDec(-1) : 0
    );
  return sorting;
};

export default sortBy