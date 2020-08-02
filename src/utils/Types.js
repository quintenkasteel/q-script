export const isFunction = (func) => {
  if (func && typeof func === "function") {
    return true;
  }
  return false;
};

export const isEmpty = (obj) => {
  return (
    [Object, Array].includes((obj || {}).constructor) &&
    !Object.entries(obj || {}).length
  );
};

export const isString = (str) => {
  if (str && typeof str.valueOf() === "string") {
    return true
  }
  return false
}