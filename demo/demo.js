console.log("difference 1,2,4], [2,3,5]", q.difference([1, 2, 4], [2, 3, 5]));
console.log("chunk ['a', 'b', 'c', 'd'], 2", q.chunk(["a", "b", "c", "d"], 2));
console.log(
  "compact [0, 1, false, 2, '', 3]",
  q.compact([0, 1, false, 2, "", 3])
);
console.log("drop [1, 2, 3, 4, 5], 2", q.drop([1, 2, 3, 4, 5], 2));
console.log("dropEnd [1, 2, 3, 4, 5], 2", q.dropEnd([1, 2, 3, 4, 5], 2));
console.log("takeEnd [1, 2, 3, 4, 5], 2", q.takeEnd([1, 2, 3, 4, 5], 2));
console.log("fill [4, 6, 8, 10], '*', 1, 3", q.fill([4, 6, 8, 10], "*", 1, 3));

var users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 41, active: false },
  { user: "pebbles", age: 1, active: true },
];

console.log(
  "find first users, age < 40",
  q.findFirst(users, function (o) {
    return o.age < 40;
  })
);
console.log(
  "find index users, age < 40",
  q.findFirstIndex(users, function (o) {
    return o.age > 40;
  })
);
console.log("flatten [1, [2, [3, [4]], 5]]", q.flatten([1, [2, [3, [4]], 5]]));
console.log(
  "flattenDeep [1, [2, [3, [4]], 5]]",
  q.flattenDeep([1, [2, [3, [4]], 5]])
);
console.log(
  "pair arr",
  q.fromPair([
    ["a", 1],
    ["b", 2],
  ])
);
console.log("pair obj", q.toPair({ one: 1, two: 2, three: 3 }));
console.log("head [1, 2, 3]", q.head([1, 2, 3]));
console.log("head [1, 2, 3]", q.tail([1, 2, 3]));
console.log(
  "intersect [[1, 2, 3], [101, 2, 1, 10], [2, 1]]",
  q.intersect([
    [1, 2, 3],
    [101, 2, 1, 10],
    [2, 1],
  ])
);
console.log(
  "lastIndexOf [2, 9, 9, 4, 3, 6], 9",
  q.lastIndexOf([2, 9, 9, 4, 3, 6], 4)
);
console.log(
  "groupedby ['one', 'two', 'three'], 'length'",
  q.groupBy(["one", "two", "three"], "length")
);
console.log(
  "groupedby [1.3, 2.1, 2.4], num => Math.floor(num)",
  q.groupBy([1.3, 2.1, 2.4], Math.floor)
);
console.log("includes [1, 2, 3], 1", q.includes([1, 2, 3], 1));
console.log(
  "keyBy { data: { id: 'a1', title: 'abc' }}, 'id'",
  q.keyBy([{ data: { id: "a1", title: "abc" } }], "id")
);
console.log(
  "keyBy { data: { id: 'a1', title: 'abc' }}, 'id'",
  q.keyBy(
    [
      { id: "a1", title: "abc" },
      { id: "b2", title: "def" },
    ],
    "id"
  )
);
console.log(
  "minBy [{ value: 6 }, { value: 2 }, { value: 4 }], 'value'",
  q.minBy([{ value: 6 }, { value: 2 }, { value: 4 }], "value")
);
console.log(
  "maxBy [{ value: 6 }, { value: 2 }, { value: 4 }], 'value'",
  q.maxBy([{ value: 6 }, { value: 2 }, { value: 4 }], "value")
);
console.log(
  "[{name: 'Alice'}, {name: 'Bob', id: 3}, {name: 'Jeremy'}], 'name'",
  q.pluck(
    [{ name: "Alice" }, { name: "Bob", id: 3 }, { name: "Jeremy" }],
    "name"
  )
);
console.log("sample [1, 2, 3, 4, 5]", q.sample([1, 2, 3, 4, 5]));
console.log(
  "size [1, 2, 3, 4, 5]",
  q.size([{ i: 1 }, { e: 2 }, { f: 3 }, { h: 4 }, { g: 5 }])
);
const fruits = [
  { name: "banana", amount: 2 },
  { name: "apple", amount: 4 },
  { name: "pineapple", amount: 2 },
  { name: "mango", amount: 1 },
];
console.log("sort fruits by name", q.sortBy(fruits, "name"));
console.log("unique [1, 1, 1, 2, 3, 4, 5]", q.unique([1, 1, 1, 2, 3, 4, 5]));
console.log("isFunction console.log()", q.isFunction(console.log));
console.log("is Empty ''", q.isEmpty([]));
console.log("has a", q.has({ a: 1, b: "settings" }, "a"));
console.log("get c", q.get({ a: [{ b: { c: 3 } }] }, "a[0].b.c"));
console.log(
  "keys {one: 1, two: 2, three: 3}",
  q.keys({ one: 1, two: 2, three: 3 })
);
console.log(
  "pick { 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c']",
  q.pick({ a: 1, b: "2", c: 3 }, ["a", "c"])
);
console.log(
  "pickBy { 'a': 1, 'b': null, 'c': 3, 'd': false, 'e': undefined }",
  q.pickBy({ a: 1, b: null, c: 3, d: false, e: undefined })
);
console.log(
  "values {one: 1, two: 2, three: 3}",
  q.values({ one: 1, two: 2, three: 3 })
);

console.log("inRange 3, 2, 1", q.inRange(3, 1, 5));
console.log("randomInt", q.randomInt(1, 5));
console.log("randomFloat", q.randomInt(1, 5, true));


const styled = `
  color: red;
  font-weight: bold;
  position: relative;
`;

q.DOM(() => {
  q.DOM("h1").css`color: red;`;
  q.DOM("h1").addClass("yes");

  q.DOM("h1").on("click", () => {
    alert("WOUW");
    q.DOM("h1").removeClass("yes");
  });
  q.DOM("li").each(function (i) {
    if (i % 2 === 0) {
      q.DOM(this).css(`color: green;`);
    } else {
      q.DOM(this).css(styled).hide().show();
    }
  });
});

console.log("uuid", q.uuid());
console.log("timeDifference", q.timeDifference("2020-05-02", "2019-05-02"));
console.log("isBefore", q.isBefore("2020-05-02", "2019-05-02"));
console.log("isAfter", q.isAfter("2020-05-02", "2019-05-02"));
console.log("isSame", q.isSame("2020-05-02", "2019-05-02"));
console.log("isLeapYear", q.isLeapYear("2020"));
console.log("day", q.day());
console.log("daysInMonth", q.daysInMonth("2020", "2"));
console.log("hour", q.hour());
const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9),
];
console.log("maxDate", q.maxDate(array));
console.log("minDate", q.minDate(array));
console.log("minutes", q.minutes());
console.log("seconds", q.seconds());
console.log("setDay", q.setDay(8));
console.log("setHours", q.setHours(8));
console.log("setMilliseconds", q.setMilliseconds(1));
console.log("setMinutes", q.setMinutes(1));
console.log("setSeconds", q.setSeconds(1));
console.log("week", q.week(new Date()));
console.log("addTime", q.addTime(7));
console.log("subtractTime", q.subtractTime(7));
console.log("stringDateFormat", q.stringDateFormat());
console.log("stringTimeFormat", q.stringTimeFormat());