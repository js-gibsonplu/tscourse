// strings
let myName = "jonathan"
// myName = 17; cannot assign number to string type

let animals = {
  cat: "lion",
  dog: "hyena",
  snake: "boa"
};

const newNum = 19191919191;

// numbers
let number = 38;
console.log(number);
number = 1;
console.log(number);

let age: number;
age = 29;
console.log(age);
age = 34;
console.log(age);

// arrays
let names: string[] = ["james", "billy", "steve"];
console.log(names);

// tuples
let mine: [number, string, boolean] = [12, "twelve", true];
console.log(mine);

// enums
enum namesEnum {
  "jonathan" = 16,
  "nic",
  "john"
}

let myNamesEnum: namesEnum = namesEnum.john;
console.log(myNamesEnum);
console.log(namesEnum);
console.log(namesEnum[17]);

// functions
function returnMyAge(): number {
  return newNum;
}

console.log(`my return function ` + returnMyAge());

let multiply: () => number = returnMyAge;

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

let userData: { name: string; age: number } = {
  name: "bill",
  age: 8665857
};

console.table(userData)

let userData2: { name: string, age: number } = { ...userData };
userData2 = {
  a: 17,
  n: 'bacon',
}
console.table(userData2);