import q from "../src/index.js";
import style from "../src/Style.js"
import _ from "../src/utils/Utils.js";

console.log("difference 1,2,4], [2,3,5]", _.difference([1,2,4], [2,3,5]));
console.log("chunk ['a', 'b', 'c', 'd'], 2", _.chunk(['a', 'b', 'c', 'd'], 2));
console.log("compact [0, 1, false, 2, '', 3]", _.compact([0, 1, false, 2, '', 3]));
console.log("drop [1, 2, 3, 4, 5], 2", _.drop([1, 2, 3, 4, 5], 2));
console.log("dropEnd [1, 2, 3, 4, 5], 2", _.dropEnd([1, 2, 3, 4, 5], 2));
console.log("takeEnd [1, 2, 3, 4, 5], 2", _.takeEnd([1, 2, 3, 4, 5], 2));
console.log("fill [4, 6, 8, 10], '*', 1, 3", _.fill([4, 6, 8, 10], '*', 1, 3));

var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 41, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
]

console.log("find first users, age < 40", _.findFirst(users, function (o) { return o.age < 40; }));
console.log("find index users, age < 40", _.findFirstIndex(users, function (o) { return o.age > 40; }));
console.log("flatten [1, [2, [3, [4]], 5]]", _.flatten([1, [2, [3, [4]], 5]]));
console.log("flattenDeep [1, [2, [3, [4]], 5]]", _.flattenDeep([1, [2, [3, [4]], 5]]));
console.log("pair [['a', 1], ['b', 2]]", _.pair([['a', 1], ['b', 2]]));
console.log("head [1, 2, 3]", _.head([1, 2, 3]));
console.log("head [1, 2, 3]", _.tail([1, 2, 3]));
console.log("intersect [[1, 2, 3], [101, 2, 1, 10], [2, 1]]", _.intersect([[1, 2, 3], [101, 2, 1, 10], [2, 1]]));
console.log("lastIndexOf [2, 9, 9, 4, 3, 6], 9", _.lastIndexOf([2, 9, 9, 4, 3, 6], 4));
console.log("groupedby ['one', 'two', 'three'], 'length'", _.groupBy(['one', 'two', 'three'], 'length'));
console.log("groupedby [1.3, 2.1, 2.4], num => Math.floor(num)", _.groupBy([1.3, 2.1, 2.4], Math.floor));
console.log("includes [1, 2, 3], 1", _.includes([1, 2, 3], 1));
console.log("{ data: { id: 'a1', title: 'abc' }}, 'id'", _.keyBy([{ data: { id: 'a1', title: 'abc' }}], 'id'));
console.log("{ data: { id: 'a1', title: 'abc' }}, 'id'", _.keyBy([{ id: 'a1', title: 'abc' }, { id: 'b2', title: 'def' }], 'id'));


const styledDiv = style.div`
    color: black;
  `

const styled = `
  color: red;
  font-weight: bold;
  position: relative;
`;

q(() => {
  q("h1").css`color: red;`;
  q("h1").addClass("yes");

  q(".class").append(styledDiv)
  q(styledDiv).append(document.createElement('p'))
  
  q("h1").on("click", () => {
    alert("WOUW");
    q("h1").removeClass("yes");
  });
  q("li").each(function (i) {
    if (i % 2 === 0) {
      q(this).css(`color: green;`);
    } else {
      q(this).css(styled).hide().show();
    }
  });
});
