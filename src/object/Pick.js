const pick = (object, selectors) => {
  return selectors.reduce((obj, selector) => {
    if (object && object.hasOwnProperty(selector)) {
      obj[selector] = object[selector];
    }
    return obj;
  }, {});
};

export default pick