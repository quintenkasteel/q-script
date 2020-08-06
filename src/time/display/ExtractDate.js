const extractDate = string => (([year, day, month]) => ({ day, month, year }))(string.split('-'));

export default extractDate