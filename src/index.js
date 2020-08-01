import  createFunction from './Create.js'

const q = (...args) => {
  if (typeof args[0] === 'function') {
    // document ready listener
    const readyFn = args[0];
    document.addEventListener('DOMContentLoaded', readyFn);
  } else if (typeof args[0] === 'string') {
    // select an element!
    const selector = args[0];
    const collection = document.querySelectorAll(selector);
    createFunction(collection);
    return collection;
  } else if (args[0] instanceof HTMLElement) {
     // we have an element!
    const collection = [args[0]];
    createFunction(collection);
    return collection;
  }
};

export default q 