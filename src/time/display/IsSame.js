import extractDate from "./ExtractDate.js";

const isSame = (first, second) => {
  const firstDate = extractDate(first);
  const secondDate = extractDate(second);
  return (
    new Date(firstDate[year], firstDate[month], firstDate[day]).valueOf() ===
    new Date(secondDate[year], secondDate[month], secondDate[day]).valueOf()
  );
};
export default isSame;
