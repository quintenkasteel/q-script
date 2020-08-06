import {
  drop,
  dropEnd,
  fill,
  findFirst,
  findFirstIndex,
  flatten,
  flattenDeep,
  head,
  tail,
  intersect,
  takeEnd,
  lastIndexOf,
  groupBy,
  includes,
  keyBy,
  minBy,
  maxBy,
  pluck,
  sample,
  size,
  sortBy,
  unique,
} from "./utils/Array.js";
import chunk from "./utils/array/Chunk.js";
import compact from "./utils/array/Compact.js";
import difference from "./utils/array/Difference.js";
import { isFunction, isEmpty } from "./utils/Types.js";
import {
  has,
  get,
  keys,
  pick,
  pickBy,
  fromPair,
  toPair,
  values,
} from "./utils/Object.js";
import { inRange, randomInt } from "./utils/Utils.js";
import DOM from "./DOM/DOM.js";

var q = (function () {
  "use strict";

  // Create the methods object
  var methods = {};

  //Array
  methods.difference = (a, b) => {
    return difference(a, b);
  };

  methods.DOM = (...args) => {
    return DOM(...args);
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

  methods.minBy = (arr, by) => {
    return minBy(arr, by);
  };

  methods.maxBy = (arr, by) => {
    return maxBy(arr, by);
  };

  methods.pluck = (arr, by) => {
    return pluck(arr, by);
  };

  methods.sample = (arr) => {
    return sample(arr);
  };

  methods.size = (arr) => {
    return size(arr);
  };

  methods.sortBy = (arr, key, type) => {
    return sortBy(arr, key, type);
  };

  methods.unique = (arr) => {
    return unique(arr);
  };

  //Functions
  methods.isFunction = (func) => {
    return isFunction(func);
  };

  methods.isEmpty = (obj) => {
    return isEmpty(obj);
  };

  // Object
  methods.has = (obj, key) => {
    return has(obj, key);
  };

  methods.get = (obj, path, defaultValue) => {
    return get(obj, path, defaultValue);
  };

  methods.keys = (obj) => {
    return keys(obj);
  };

  methods.pick = (obj, selectors) => {
    return pick(obj, selectors);
  };

  methods.pickBy = (obj) => {
    return pickBy(obj);
  };

  methods.fromPair = (arr) => {
    return fromPair(arr);
  };

  methods.toPair = (arr) => {
    return toPair(arr);
  };

  methods.values = (arr) => {
    return values(arr);
  };

  methods.inRange = (num, min, max) => {
    return inRange(num, min, max);
  };

  methods.randomInt = (min, max, float) => {
    return randomInt(min, max, float);
  };

  // Expose the public methods
  return methods;
})();

export default q;
