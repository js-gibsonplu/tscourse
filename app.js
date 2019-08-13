"use strict";
var myName = 'jonathan';
var animals = {
    cat: 'lion',
    dog: 'hyena',
    snake: 'boa'
};
var number = 38;
console.log(number);
number = 1;
console.log(number);
var age;
age = 29;
console.log(age);
age = 34;
console.log(age);
var names = ['james', 'billy', 'steve'];
console.log(names);
var mine = [12, 'twelve', true];
console.log(mine);
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
