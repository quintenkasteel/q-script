var css = ` 
  color: red;
  font-weight: bold;
  position: relative;

    &:before {
      color: green;
    }

    @media screen and (min-width:0) and (max-width:640px)  {
      :first-child & {
        
      }
    }
    @media screen and (min-width:6) and (max-width:640px)  {
      &:first-child {
    }
    }
  `;

const matchInArrayStart = (string, expressions) => {
  expressions.forEach((e, i) => {
    if (!e.startsWith(string)) {
      expressions.splice(i, 1);
    }
  });
  expressions = expressions.filter((x, i) => i % 2 === 0);

  return expressions;
};

const cssRgx = (string) => {
  var className = "class";
  var rgxAllMedia = /(@.*?:[^}{@]+(\{(?:[^}{]+|\{(?:[^}{]+|\{[^}{]*\})*\})*\}))/g;
  var rgxAllValidCSS = /([#.]?[\w.:> ]+)[\s]{[\r\n]?([A-Za-z\- \r\n\t]+[:][\s]*[\w .\/()\-!]+;[\r\n]*(?:[A-Za-z\- \r\n\t]+[:][\s]*[\w .\/()\-!]+;[\r\n]*(2)*)*)}/g;
  var rgxAllNested = /[.@&#]+/;
  var rgxAllAnds = /&/g;
  var replaced = css.replace(rgxAllAnds, ".class");
  var noTabs = replaced.replace(/[\t\n]/g, "");
  var split = replaced.split(rgxAllNested);
  var splitparent = split[0]; // done
  var splitrest = split[1].split(rgxAllValidCSS);
  var parentRule = `.${className} {${splitparent}}`;
  
  var splitMedia = replaced.split(rgxAllMedia);
  var onlyMedia = matchInArrayStart("@", splitMedia);
  onlyMedia.forEach((e, i) => {
    console.log(`media`, e);
  });

  console.log("rest", splitrest);

  console.log("parent-rule", parentRule);
};

export default cssRgx;
