import extractDate from "./ExtractDate.js";

const difference = (first, second) => {
  const firstDate = extractDate(first);
  const secondDate = extractDate(second);
  return Math.ceil(
    (new Date(secondDate['year'], secondDate['month'], secondDate['day']) -
      new Date(firstDate['year'], firstDate['month'], firstDate['day'])) /
      1000 /
      60 /
      60 /
      24
  );
};

export default difference;
