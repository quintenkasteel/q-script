import addCssReturnClass from "./ParseCss.js";

const createFunction = (collection) => {
  // each function
  collection.each = (callback) => {
    collection.forEach((element, i) => {
      const boundFn = callback.bind(element);
      boundFn(i, element);
    });
    return collection;
  };

  // on function
  collection.on = (eventName, handler) => {
    collection.forEach((element) => {
      element.addEventListener(eventName, handler);
    });
    return collection;
  };
  //css function
  collection.css = (...cssArgs) => {
    collection.forEach((element) => {
      element.classList.add(addCssReturnClass(cssArgs));
    });
    return collection;
  };

  collection.hide = () => {
    collection.forEach((element) => {
      element.classList.remove("q-show");
      element.classList.add("q-hide");
    });
    return collection;
  };

  collection.show = () => {
    collection.forEach((element) => {
      element.classList.add("q-show");
      element.classList.remove("q-hide");
    });
    return collection;
  };

  collection.addClass = (name) => {
    collection.forEach((element) => {
      element.classList.add(name);
    });
    return collection;
  };

  collection.removeClass = (name) => {
    collection.forEach((element) => {
      element.classList.remove(name);
    });
    return collection;
  };

  collection.append = (element) => {
    collection.forEach((parent) => {
      parent.appendChild(element);
    });
    return collection;
  };

  // non chainable functions they return something
  collection.forEach((element) => {
    collection.getOuterHeight = (withMargin) => {
      var height = element.offsetHeight;
      if (withMargin) {
        var style = getComputedStyle(element);
        height += parseInt(style.marginTop) + parseInt(style.marginBottom);
      }
      return height;
    };

    collection.getOuterWidth = (withMargin) => {
      var width = element.offsetWidth;
      if (withMargin) {
        var style = getComputedStyle(element);
        width += parseInt(style.marginLeft) + parseInt(style.marginRight);
      }
      return width;
    };
    return collection;
  });
};

export default createFunction;


