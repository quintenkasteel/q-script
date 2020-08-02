
import addCssReturnClass from './ParseCSS.js';

var element = document.createElement("div");
var styled = {};

styled.div = (args) => {
  
  element.classList.add(addCssReturnClass(args));
  return element
};

export default styled

