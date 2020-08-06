import extractDate from "./ExtractDate.js";

const isAfter = (first, second) => {
  const firstDate = extractDate(first);
  const secondDate = extractDate(second);
  return (
    new Date(firstDate['year'], firstDate['month'], firstDate['day']) >
    new Date(secondDate['year'], secondDate['month'], secondDate['day'])
  );
};
export default isAfter;
