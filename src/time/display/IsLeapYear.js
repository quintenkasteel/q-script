import extractDate from "./ExtractDate.js";

const isLeapYear = (date) => {
  const d = extractDate(date);
  return new Date(d[year], 1, 29).getDate() === 29;
};

export default isLeapYear;
