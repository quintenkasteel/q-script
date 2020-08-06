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

export const head = (arr) => {
  // eslint-disable-next-line no-unused-vars
  const [head, ...tail] = arr;
  return head;
};

export const tail = (arr) => {
  // eslint-disable-next-line no-unused-vars
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

const makeSelect = (comparator) => (a, b) => (comparator(a, b) ? a : b);

export const minBy = (arr, by) => {
  const minByValue = makeSelect((a, b) => a[by] <= b[by]);
  return arr.reduce(minByValue, {});
};

export const maxBy = (arr, by) => {
  const maxByValue = makeSelect((a, b) => a[by] >= b[by]);
  return arr.reduce(maxByValue, {});
};

export const pluck = (arr, val) => {
  var values = arr.map(function (x) {
    return x[val];
  });
  return values;
};

export const sample = (arr) => {
  const len = arr == null ? 0 : arr.length;
  return len ? arr[Math.floor(Math.random() * len)] : undefined;
};

export const size = (arr) => {
  if (arr.isArray) return arr.length;
  return Object.keys(arr).length;
};

export const sortBy = (arr, key, type) => {
  const ascOrDec = (num) => (type === "dec" ? num * -1 : num);
  const sorting = arr
    .concat()
    .sort((a, b) =>
      a[key] > b[key] ? ascOrDec(1) : b[key] > a[key] ? ascOrDec(-1) : 0
    );
  return sorting;
};

export const unique = (arr) => {
  // eslint-disable-next-line
  return [...new Set(arr)];
};
