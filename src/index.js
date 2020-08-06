import drop from "./array/Drop.js";
import dropEnd from "./array/DropEnd.js";
import fill from "./array/Fill.js";
import findFirst from "./array/FindFirst.js";
import findFirstIndex from "./array/FindFirstIndex.js";
import flatten from "./array/Flatten.js";
import flattenDeep from "./array/FlattenDeep.js";
import head from "./array/Head.js";
import tail from "./array/Tail.js";
import intersect from "./array/Intersect.js";
import takeEnd from "./array/TakeEnd.js";
import lastIndexOf from "./array/LastIndexOf.js";
import groupBy from "./array/GroupBy.js";
import includes from "./array/Includes.js";
import keyBy from "./array/KeyBy.js";
import minBy from "./array/MinBy.js";
import maxBy from "./array/MaxBy.js";
import pluck from "./array/Pluck.js";
import sample from "./array/Sample.js";
import size from "./array/Size.js";
import sortBy from "./array/SortBy.js";
import unique from "./array/Unique.js";
import chunk from "./array/Chunk.js";
import compact from "./array/Compact.js";
import difference from "./array/Difference.js";

import isFunction from "./types/IsFunction.js";
import isEmpty from "./types/IsEmpty.js";
import isString from "./types/IsString.js";

import has from "./object/Has.js";
import get from "./object/Get.js";
import keys from "./object/Keys.js";
import pick from "./object/Pick.js";
import pickBy from "./object/PickBy.js";
import fromPair from "./object/FromPair.js";
import toPair from "./object/ToPair.js";
import values from "./object/Values.js";

import inRange from "./numbers/InRange.js";
import randomInt from "./numbers/RandomInt.js";

import uuid from "./other/Uuid.js";

import DOM from "./DOM/DOM.js";

import timeDifference from "./time/display/TimeDifference.js";
import isBefore from "./time/display/IsBefore.js";
import isAfter from "./time/display/IsAfter.js";
import isSame from "./time/display/IsSame.js";
import isLeapYear from "./time/display/IsLeapYear.js";

import daysInMonth from "./time/get-set/DaysInMonth.js";
import day from "./time/get-set/Day.js";
import hour from "./time/get-set/Hours.js";
import maxDate from "./time/get-set/MaxDate.js";
import milliseconds from "./time/get-set/MilliSeconds.js";
import minDate from "./time/get-set/MinDate.js";
import minutes from "./time/get-set/Minutes.js";
import seconds from "./time/get-set/Seconds.js";
import setDay from "./time/get-set/SetDay.js";
import setHours from "./time/get-set/SetHours.js";
import setMilliseconds from "./time/get-set/SetMilliseconds.js";
import setMinutes from "./time/get-set/SetMinutes.js";
import setSeconds from "./time/get-set/SetSeconds.js";
import week from "./time/get-set/Week.js";

import addTime from "./time/manipulate/Add.js";
import subtractTime from "./time/manipulate/Subtract.js";

import stringDateFormat from "./time/parse/StringDateFormat.js";
import stringTimeFormat from "./time/parse/StringTimeFormat.js";

var q = (function () {
  "use strict";

  // Create the methods object
  var methods = {};

  //DOM
  methods.DOM = (...args) => {
    return DOM(...args);
  };

  //Array
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
