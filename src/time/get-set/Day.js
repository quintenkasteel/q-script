const day = (from="month", string) => {
  if (from === "week") {
    if (!string) {
      return new Date().getDay();
    }
  } else if (from === "month"){
    if (!string) {
      return new Date().getDate();
    }
  } else if (from === "year"){
    if (!string) {
      return Math.floor(
        (new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
      );
    }
  }
};

export default day;
