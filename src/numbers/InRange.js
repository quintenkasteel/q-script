const inRange = (num, a, b = 0) => {
  return Math.min(a, b) <= num && num < Math.max(a, b);
}

export default inRange