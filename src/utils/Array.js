export const chunk = (input, size) => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};

export const compact = (arr) => {
  return arr.filter(Boolean);
};

export const difference = (a, b) => {
  var arrs = [a, b];
  var newarrs = arrs.reduce((a, b) => a.filter((c) => !b.includes(c)));
  return newarrs;
};

export const drop = (arr, i = 1) => {
  return arr.slice(i);
};

export const dropEnd = (arr, i = 1) => {
  return arr.slice(0, -i);
};

export const takeEnd = (arr, i = 1) => {
  if (i === 0) {
    return arr.slice(arr.length);
  } else {
    return arr.slice(-i);
  }
};

export const fill = (arr, ...replace) => {
  return arr.fill(...replace);
};

export const findFirst = (arr, funct) => {
  return arr.find(funct);
};

export const findFirstIndex = (arr, funct) => {
  return arr.findIndex(funct);
};

export const flatten = (arr) => {
  return arr.flatMap((number) => number);
};

export const flattenDeep = (arr) => {
  return arr.flat(Infinity);
};

export const pair = (arr) => {
  return Object.fromEntries(arr);
};

export const head = (arr) => {
  const [head, ...tail] = arr;
  return head;
};

export const tail = (arr) => {
  const [head, ...tail] = arr;
  return tail;
};

export const intersect = (arr) => {
  return arr.reduce((a, b) => a.filter((c) => b.includes(c)));
};

export const lastIndexOf = (arr, i) => {
  return arr.lastIndexOf(i);
};

export const groupBy = (arr, by) => {
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
export const includes = (arr, include) => {
  return arr.indexOf(include) > -1;
};

export const keyBy = (arr, key) => {
  const keyBy = (array, k) =>
    (array || []).reduce((r, x) => ({ ...r, [k ? x[k] : x]: x }), {});

  return arr.isArray ? keyBy(arr, key) : Object.values(keyBy(arr, key));
};
