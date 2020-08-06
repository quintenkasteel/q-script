const keys = (obj) => {
  if (obj && typeof obj === "object") {
    return Object.keys(obj);
  }
};

export default keys