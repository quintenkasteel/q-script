const styleEl = document.createElement("style");
document.head.appendChild(styleEl);
const sheet = styleEl.sheet;

const insertRules = (rules) => {
  rules.forEach((rule, i) => {
    sheet.insertRule(rule, i);
  });
};

const resetcss = [
  ".q-show { display: block; }",
  ".q-hide { display: none; }",
  ".g-fade-out { opacity: 0; transition: ease-in-out 400ms}",
  ".g-fade-in { opacity: 1; transition: ease-in-out 400ms}",
];

insertRules(resetcss);

function interleave(strings, interpolations) {
  return strings.reduce(
    (final, str, i) =>
      final + str + (interpolations[i] === undefined ? "" : interpolations[i]),
    ""
  );
}

function addCssReturnClass(strings, ...interpolations) {
  const styleString = interleave(strings, interpolations);
  const index = sheet.cssRules.length;
  const random = Math.random().toString(36).substring(2, 15);
  const className = `QCss-${random}${index}`;

  const containsSibling = styleString.includes("&");
  const containsMediaQuery = styleString.includes("@media");

  if (containsSibling && !containsMediaQuery) {
    const and = styleString.split("&");
    and.shift();

      const pseudoStringClean = pseudoString;

      pseudoStringClean.forEach((element) => {
      const rule = `.${className}${element}`;
      sheet.insertRule(rule, index);
      console.log("e", rule);
    });
  }

  if (!containsSibling && containsMediaQuery) {
    const mediaString = styleString.split("@");
    const mediaSplit = mediaString[1].split("{");
    const firstRule = `.${className} { ${mediaString[0]} }`;
    const mediaQuery = `@${mediaSplit[0]} { .${className} { ${mediaSplit[1]}}`;
    sheet.insertRule(firstRule, index);
    sheet.insertRule(mediaQuery, index);
  }
  if (containsSibling && containsMediaQuery) {
    // parent style
    if (styleString.split("@")) {
      const parent = styleString.split("@");

      const parentString = parent[0].includes("media") ? parent[1] : parent[0];
      const cleanparentString = parentString.includes("&")
        ? parentString.split("&")[0]
        : parentString;

      //mediaStrings
      const mediaString = parent[0].includes("media") ? parent[0] : parent[1];
      const mediaStringClean = mediaString.includes("&")
        ? mediaString.split("&")[0]
        : mediaString;

      //psuedoString
      const pseudoString = parent[0].includes("&")
        ? parent[0].split("&")
        : parent[1].includes("&")
        ? parent[1].split("&")
        : null;

      pseudoString.shift();

      const pseudoStringClean = pseudoString;


      if (mediaStringClean) {
        const mediaString = mediaStringClean.split("{");
        const rule = `@${mediaString[0]} { .${className} { ${mediaString[1]} }`;
        sheet.insertRule(rule, index);
      }
      // parent style
      if (cleanparentString) {
        const rule = `.${className}{ ${cleanparentString} }`;
        sheet.insertRule(rule, index);
      }

      if (pseudoStringClean) {
        pseudoStringClean.forEach((element) => {
          const rule = `.${className}${element}`;
          sheet.insertRule(rule, index);
        });
      }
    }
  } else {
    const rule = `.${className} { ${styleString} }`;
    sheet.insertRule(rule, index);
  }
  return className;
}

export default addCssReturnClass;
