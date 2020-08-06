const get = (obj, path, defaultValue = undefined) => {
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

export default get