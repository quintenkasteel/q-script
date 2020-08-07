import {
  unique,
  difference,
  chunk,
  compact,
  sortBy,
  keyBy,
  includes,
  size,
  sample,
  pluck,
  maxBy,
  minBy,
  groupBy,
  lastIndexOf,
  takeEnd,
  intersect,
  tail,
  head,
  flattenDeep,
  flatten,
  findFirstIndex,
  findFirst,
  fill,
  dropEnd,
  drop,
} from "./array/Array.js";

import {
  has,
  get,
  keys,
  pick,
  pickBy,
  fromPair,
  toPair,
  values,
} from "./object/Object.js";

import {
  timeDifference,
  isBefore,
  isAfter,
  isSame,
  isLeapYear,
  daysInMonth,
  day,
  hour,
  maxDate,
  milliseconds,
  minDate,
  minutes,
  seconds,
  setDay,
  setHours,
  setMilliseconds,
  setMinutes,
  setSeconds,
  week,
  addTime,
  subtractTime,
  stringDateFormat,
  stringTimeFormat,
} from "./time/Time.js";
import { inRange, randomInt } from "./numbers/Numbers.js";
import { isFunction, isEmpty, isString } from "./types/Types.js";
import uuid from "./other/Uuid.js";
import DOM from "./DOM/DOM.js";

const q = (function () {
  "use strict";

  // Create the methods object
  var methods = {};

  //DOM
  methods.DOM = (...args) => {
    return DOM(...args);
  };

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

  //types
  methods.isFunction = (func) => {
    return isFunction(func);
  };

  methods.isEmpty = (obj) => {
    return isEmpty(obj);
  };

  methods.isString = (str) => {
    return isString(str);
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

  //numbers

  methods.inRange = (num, min, max) => {
    return inRange(num, min, max);
  };

  methods.randomInt = (min, max, float) => {
    return randomInt(min, max, float);
  };

  //other

  methods.uuid = () => {
    return uuid();
  };

  // time
  methods.timeDifference = (firstDate, secondDate) => {
    return timeDifference(firstDate, secondDate);
  };

  methods.isAfter = (firstDate, secondDate) => {
    return isAfter(firstDate, secondDate);
  };

  methods.isBefore = (firstDate, secondDate) => {
    return isBefore(firstDate, secondDate);
  };

  methods.isSame = (firstDate, secondDate) => {
    return isSame(firstDate, secondDate);
  };

  methods.isLeapYear = (year) => {
    return isLeapYear(year);
  };

  methods.day = (from, date) => {
    return day(from, date);
  };

  methods.daysInMonth = (y, m) => {
    return daysInMonth(y, m);
  };

  methods.hour = () => {
    return hour();
  };

  methods.maxDate = (array) => {
    return maxDate(array);
  };

  methods.milliseconds = () => {
    return milliseconds();
  };

  methods.minDate = (array) => {
    return minDate(array);
  };

  methods.minutes = () => {
    return minutes();
  };

  methods.seconds = () => {
    return seconds();
  };

  methods.setDay = (d) => {
    return setDay(d);
  };

  methods.setHours = (h) => {
    return setHours(h);
  };

  methods.setMilliseconds = (ms) => {
    return setMilliseconds(ms);
  };

  methods.setMinutes = (m) => {
    return setMinutes(m);
  };

  methods.setSeconds = (s) => {
    return setSeconds(s);
  };

  methods.week = (d, type) => {
    return week(d, type);
  };

  methods.addTime = (d) => {
    return addTime(d);
  };

  methods.subtractTime = (d) => {
    return subtractTime(d);
  };

  methods.stringDateFormat = (d) => {
    return stringDateFormat(d);
  };

  methods.stringTimeFormat = () => {
    return stringTimeFormat();
  };

  // Expose the public methods
  return methods;
})();

export default q;
