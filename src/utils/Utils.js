import {
  difference,
  chunk,
  compact,
  drop,
  dropEnd,
  fill,
  findFirst,
  findFirstIndex,
  flatten,
  flattenDeep,
  pair,
  head,
  tail,
  intersect,
  takeEnd,
  lastIndexOf,
  groupBy,
  includes,
  keyBy,
} from "./Array.js";

var _ = (function () {
  "use strict";

  // Create the methods object
  var methods = {};

  methods.difference = (a, b) => {
    return difference(a, b);
  };

  methods.chunk = (input, size) => {
    return chunk(input, size);
  };

  methods.compact = (arr) => {
    return compact(arr);
  };

  methods.drop = (arr, i) => {
    return drop(arr, i);
  };

  methods.dropEnd = (arr, i) => {
    return dropEnd(arr, i);
  };

  methods.fill = (arr, ...result) => {
    return fill(arr, ...result);
  };

  methods.findFirst = (arr, func) => {
    return findFirst(arr, func);
  };

  methods.findFirstIndex = (arr, func) => {
    return findFirstIndex(arr, func);
  };

  methods.flatten = (arr) => {
    return flatten(arr);
  };

  methods.flattenDeep = (arr) => {
    return flattenDeep(arr);
  };

  methods.pair = (arr) => {
    return pair(arr);
  };

  methods.head = (arr) => {
    return head(arr);
  };

  methods.tail = (arr) => {
    return tail(arr);
  };

  methods.intersect = (arr) => {
    return intersect(arr);
  };

  methods.takeEnd = (arr, i) => {
    return takeEnd(arr, i);
  };

  methods.lastIndexOf = (arr, i) => {
    return lastIndexOf(arr, i);
  };

  methods.groupBy = (arr, by) => {
    return groupBy(arr, by);
  };

  methods.includes = (arr, include) => {
    return includes(arr, include);
  };

  methods.keyBy = (arr, key) => {
    return keyBy(arr, key);
  };

  // Expose the public methods
  return methods;
})();

export default _;
