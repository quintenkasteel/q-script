const add = (day) => {
  return new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * day);
};

export default add;