export const inRange = (num, a, b = 0) =>
  Math.min(a, b) <= num && num < Math.max(a, b);


export const randomInt = (a = 1, b = 0, float = false) => {
  if (float) {
    const lower = Math.min(a, b);
    const upper = Math.max(a, b);
    return lower + Math.random() * (upper - lower);
  } else {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    return Math.floor(lower + Math.random() * (upper - lower + 1));
  }
};
