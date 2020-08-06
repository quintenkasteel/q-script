const stringDateFormat = () => {
  const datePattern = /^(\d{2})-(\d{2})-(\d{4})$/;
  const [, month, day, year] = datePattern.exec("12-25-1995");
  return new Date(`${month}, ${day} ${year}`);
};

export default stringDateFormat
