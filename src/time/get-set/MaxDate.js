const maxDate = (array) => new Date(Math.max.apply(null, array)).toISOString();

export default maxDate;
