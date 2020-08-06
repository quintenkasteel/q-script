const groupBy = (arr, by) => {
  if (typeof by === "string") {
    if (by === "length") {
      return arr.reduce(
        (r, v, i, a, k = v.length) => ((r[k] || (r[k] = [])).push(v), r),
        {}
      );
    }
  } else if (typeof by === "function") {
    return arr.reduce(
      (r, v, i, a, k = by(v)) => ((r[k] || (r[k] = [])).push(v), r),
      {}
    );
  }
};

export default groupBy