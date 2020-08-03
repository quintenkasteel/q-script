
/* eslint-disable */

import addCssReturnClass from './ParseCSS.js';
import React from 'react'

var css = {};

css = (style) => {
  // eslint-disable-next-line
  // var element = document.createElement("div");
  // element.classList.add();
  return addCssReturnClass(style)
};

export default css


