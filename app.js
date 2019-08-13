"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// strings
var myName = "jonathan";
// myName = 17; cannot assign number to string type
var animals = {
    cat: "lion",
    dog: "hyena",
    snake: "boa"
};
var newNum = 19191919191;
// numbers
var number = 38;
console.log(number);
number = 1;
console.log(number);
var age;
age = 29;
console.log(age);
age = 34;
console.log(age);
// arrays
var names = ["james", "billy", "steve"];
console.log(names);
// tuples
var mine = [12, "twelve", true];
console.log(mine);
// enums
var namesEnum;
(function (namesEnum) {
    namesEnum[namesEnum["jonathan"] = 16] = "jonathan";
    namesEnum[namesEnum["nic"] = 17] = "nic";
    namesEnum[namesEnum["john"] = 18] = "john";
})(namesEnum || (namesEnum = {}));
var myNamesEnum = namesEnum.john;
console.log(myNamesEnum);
console.log(namesEnum);
console.log(namesEnum[17]);
// functions
function returnMyAge() {
    return newNum;
}
console.log("my return function " + returnMyAge());
var multiply = returnMyAge;
console.log(multiply());
// objects
// let data = {
//   name: "jon",
//   age: 34
// };
// console.table(data);
// data = {
//   age: 34,
//   name: "jon"
// };
// console.table(data);
var userData = {
    name: "bill",
    age: 8665857
};
console.table(userData);
var userData2 = __assign({}, userData);
userData2 = {
    a: 17,
    n: 'bacon',
};
console.table(userData2);
