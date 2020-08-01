const styleEl = document.createElement("style");
document.head.appendChild(styleEl);
const sheet = styleEl.sheet;

const insertRules = (rules) => {
  rules.forEach((rule, i) => {
    sheet.insertRule(rule, i);
  });
};

const resetcss = [
  ".q-show { display: block; }"
, ".q-hide { display: none; }"
, ".g-fade-out { opacity: 0; transition: ease-in-out 400ms}"
, ".g-fade-in { opacity: 1; transition: ease-in-out 400ms}"
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

  if (styleString.includes("@media")) {
    const mediaString = styleString.split("@");
    const mediaSplit = mediaString[1].split("{");
    const firstRule = `.${className} { ${mediaString[0]} }`;
    const mediaQuery = `@${mediaSplit[0]} { .${className} { ${mediaSplit[1]}}`;
    sheet.insertRule(firstRule, index);
    sheet.insertRule(mediaQuery, index + 1);
  } else {
    const rule = `.${className} { ${styleString} }`;
    sheet.insertRule(rule, index);
  }

  return className;
}

export default addCssReturnClass;
