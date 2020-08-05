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
export const uuid = () => {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}