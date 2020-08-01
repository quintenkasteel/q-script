import q from "../src/index.js";

const style = `
  color: red;
  font-weight: bold;

  @media only screen and (max-width: 600px) {
    color: blue;
  }
`
q(() => {
  q("h1").css`color: red;`;
  q('h1').addClass("yes").outerHeight(true).outerWidth(true)
  console.log(q('body').outerHeight(true))
  q("h1").on("click", () => {
    alert("WOUW");
    q('h1').removeClass("yes")
  });
  q("li").each(function (i) {
    if (i % 2 === 0) {
      q(this).css(`color: green;`)
    } else {
      q(this).css(style).hide().show()
    }
  });
});
