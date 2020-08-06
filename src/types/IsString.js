const isString = (str) => {
  if (str && typeof str.valueOf() === "string") {
    return true;
  }
  return false;
};

export default isString;
