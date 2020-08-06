import extractDate from "./ExtractDate.js";

const isLeapYear = (date) => {
  const d = date.includes("-") ? extractDate(date) : date;
  return new Date(d, 1, 29).getDate() === 29;
};

export default isLeapYear;

