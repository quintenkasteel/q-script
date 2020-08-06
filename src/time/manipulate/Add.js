const add = (day) => {
  const now = new Date();
  return now.setDate(now.getDate() + day);
};

export default add