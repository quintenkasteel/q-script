const setDay = (day, fromNow) => {
  if (typeof day === "number") {
    if (fromNow) {
      return new Date().setDate(new Date().getDate() + day);
    } else {
      return new Date().setDate(day);
    }
  }
};

export default setDay;
