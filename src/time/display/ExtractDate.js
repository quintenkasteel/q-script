const extractDate = string => (([year, month, day]) => ({ year, month, day }))(string.split('-'));

export default extractDate