
import addCssReturnClass from './ParseCSS.js';
// eslint-disable-next-line
var element = document.createElement("div");
var styled = {};

styled.div = (args) => {
  
  element.classList.add(addCssReturnClass(args));
  return element
};

export default styled

