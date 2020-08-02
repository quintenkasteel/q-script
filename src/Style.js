
import addCssReturnClass from './ParseCSS.js';

var styled = {};

styled.div = (args) => {
  var element = document.createElement("div");
  element.classList.add(addCssReturnClass(args));
  return element
};

export default styled

