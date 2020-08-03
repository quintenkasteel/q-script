/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import q from "./Q.js";
import css from "./Style.js";
import _ from "./utils/Underscore.js";

const App = () => {
  console.log("difference 1,2,4], [2,3,5]", _.difference([1, 2, 4], [2, 3, 5]));
  console.log(
    "chunk ['a', 'b', 'c', 'd'], 2",
    _.chunk(["a", "b", "c", "d"], 2)
  );
  console.log(
    "compact [0, 1, false, 2, '', 3]",
    _.compact([0, 1, false, 2, "", 3])
  );
  console.log("drop [1, 2, 3, 4, 5], 2", _.drop([1, 2, 3, 4, 5], 2));
  console.log("dropEnd [1, 2, 3, 4, 5], 2", _.dropEnd([1, 2, 3, 4, 5], 2));
  console.log("takeEnd [1, 2, 3, 4, 5], 2", _.takeEnd([1, 2, 3, 4, 5], 2));
  console.log(
    "fill [4, 6, 8, 10], '*', 1, 3",
    _.fill([4, 6, 8, 10], "*", 1, 3)
  );

  var users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 41, active: false },
    { user: "pebbles", age: 1, active: true },
  ];

  console.log(
    "find first users, age < 40",
    _.findFirst(users, function (o) {
      return o.age < 40;
    })
  );
  console.log(
    "find index users, age < 40",
    _.findFirstIndex(users, function (o) {
      return o.age > 40;
    })
  );
  console.log(
    "flatten [1, [2, [3, [4]], 5]]",
    _.flatten([1, [2, [3, [4]], 5]])
  );
  console.log(
    "flattenDeep [1, [2, [3, [4]], 5]]",
    _.flattenDeep([1, [2, [3, [4]], 5]])
  );
  console.log(
    "pair arr",
    _.fromPair([
      ["a", 1],
      ["b", 2],
    ])
  );
  console.log("pair obj", _.toPair({ one: 1, two: 2, three: 3 }));
  console.log("head [1, 2, 3]", _.head([1, 2, 3]));
  console.log("head [1, 2, 3]", _.tail([1, 2, 3]));
  console.log(
    "intersect [[1, 2, 3], [101, 2, 1, 10], [2, 1]]",
    _.intersect([
      [1, 2, 3],
      [101, 2, 1, 10],
      [2, 1],
    ])
  );
  console.log(
    "lastIndexOf [2, 9, 9, 4, 3, 6], 9",
    _.lastIndexOf([2, 9, 9, 4, 3, 6], 4)
  );
  console.log(
    "groupedby ['one', 'two', 'three'], 'length'",
    _.groupBy(["one", "two", "three"], "length")
  );
  console.log(
    "groupedby [1.3, 2.1, 2.4], num => Math.floor(num)",
    _.groupBy([1.3, 2.1, 2.4], Math.floor)
  );
  console.log("includes [1, 2, 3], 1", _.includes([1, 2, 3], 1));
  console.log(
    "keyBy { data: { id: 'a1', title: 'abc' }}, 'id'",
    _.keyBy([{ data: { id: "a1", title: "abc" } }], "id")
  );
  console.log(
    "keyBy { data: { id: 'a1', title: 'abc' }}, 'id'",
    _.keyBy(
      [
        { id: "a1", title: "abc" },
        { id: "b2", title: "def" },
      ],
      "id"
    )
  );
  console.log(
    "minBy [{ value: 6 }, { value: 2 }, { value: 4 }], 'value'",
    _.minBy([{ value: 6 }, { value: 2 }, { value: 4 }], "value")
  );
  console.log(
    "maxBy [{ value: 6 }, { value: 2 }, { value: 4 }], 'value'",
    _.maxBy([{ value: 6 }, { value: 2 }, { value: 4 }], "value")
  );
  console.log(
    "[{name: 'Alice'}, {name: 'Bob', id: 3}, {name: 'Jeremy'}], 'name'",
    _.pluck(
      [{ name: "Alice" }, { name: "Bob", id: 3 }, { name: "Jeremy" }],
      "name"
    )
  );
  console.log("sample [1, 2, 3, 4, 5]", _.sample([1, 2, 3, 4, 5]));
  console.log(
    "size [1, 2, 3, 4, 5]",
    _.size([{ i: 1 }, { e: 2 }, { f: 3 }, { h: 4 }, { g: 5 }])
  );
  const fruits = [
    { name: "banana", amount: 2 },
    { name: "apple", amount: 4 },
    { name: "pineapple", amount: 2 },
    { name: "mango", amount: 1 },
  ];
  console.log("sort fruits by name", _.sortBy(fruits, "name"));
  console.log("unique [1, 1, 1, 2, 3, 4, 5]", _.unique([1, 1, 1, 2, 3, 4, 5]));
  console.log("isFunction console.log()", _.isFunction(console.log));
  console.log("is Empty ''", _.isEmpty([]));
  console.log("has a", _.has({ a: 1, b: "settings" }, "a"));
  console.log("get c", _.get({ a: [{ b: { c: 3 } }] }, "a[0].b.c"));
  console.log(
    "keys {one: 1, two: 2, three: 3}",
    _.keys({ one: 1, two: 2, three: 3 })
  );
  console.log(
    "pick { 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c']",
    _.pick({ a: 1, b: "2", c: 3 }, ["a", "c"])
  );
  console.log(
    "pickBy { 'a': 1, 'b': null, 'c': 3, 'd': false, 'e': undefined }",
    _.pickBy({ a: 1, b: null, c: 3, d: false, e: undefined })
  );
  console.log(
    "values {one: 1, two: 2, three: 3}",
    _.values({ one: 1, two: 2, three: 3 })
  );

  console.log("inRange 3, 2, 1", _.inRange(3, 1, 5));
  console.log("randomInt", _.randomInt(1, 5));
  console.log("randomFloat", _.randomInt(1, 5, true));

  const styledDiv = css`
    color: black;
  `;

  console.log(styledDiv)

  const styled = `
  color: red;
  font-weight: bold;
  position: relative;
`;

  q(() => {
    q("h1").css`color: red;`;
    q("h1").addClass("yes");

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
  return (
    <div>
      <h1>Hello World!</h1>
      <div className="class"></div>
      <ul>
        <li>Hi Mom!</li>
        <li>Today is a day.</li>
        <li>I'm on twitch!</li>
      </ul>
    </div>
  );
};

export default App;

const wrapper = document.getElementById("root");
ReactDOM.render(<App />, wrapper);
