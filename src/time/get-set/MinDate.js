const minDate = (array) => new Date(Math.min.apply(null, array)).toISOString();

export default minDate;