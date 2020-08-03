export const has = (obj, key) => {
  var keyParts = key.split(".");

  return (
    !!obj &&
    (keyParts.length > 1
      ? has(obj[key.split(".")[0]], keyParts.slice(1).join("."))
      : hasOwnProperty.call(obj, key))
  );
};

export const get = (obj, path, defaultValue = undefined) => {
  const match = (regexp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj
      );
  const result = match(/[,[\]]+?/) || match(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
};

export const keys = (obj) => {
  if (obj && typeof obj === "object") {
    return Object.keys(obj);
  }
};

export const pick = (object, selectors) => {
  return selectors.reduce((obj, selector) => {
    if (object && object.hasOwnProperty(selector)) {
      obj[selector] = object[selector];
    }
    return obj;
  }, {});
};

export const pickBy = (object) => {
  const obj = {};
  for (const key in object) {
    if (object[key]) {
      obj[key] = object[key];
    }
  }
  return obj;
};

export const toPair = (arr) => {
  return Object.entries(arr);
};

export const fromPair = (arr) => {
  return Object.fromEntries(arr);
};

export const values = (arr) => {
  return Object.values(arr);
}
