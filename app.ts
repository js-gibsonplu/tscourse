/* eslint-disable no-unused-var*/
/* eslint-disable no-console*/
// strings
// let userName:string = "Jonathan";
// console.log(`The user's name is ${userName}`)

// userName = 17;
// console.log(`The user's name is ${userName}`)


// let animals = {
//   cat: "lion",
//   dog: "hyena",
//   snake: "boa"
// };

// const newNum = 19191919191;

// // numbers
// let number = 38;
// console.log(number);
// number = 1;
// console.log(number);

// let age: number;
// age = 29;
// console.log(age);
// age = 34;
// console.log(age);

// // arrays
// let names: string[] = ["james", "billy", "steve"];
// console.log(names);

// // tuples
// let mine: [number, string, boolean] = [12, "twelve", true];
// console.log(mine);

// // enums
// enum namesEnum {
//   "jonathan" = 16,
//   "nic",
//   "john"
// }

// let myNamesEnum: namesEnum = namesEnum.john;
// console.log(myNamesEnum);
// console.log(namesEnum);
// console.log(namesEnum[17]);



function calculator(num1: number, num2: number, choice: string): number {
    let total: number;
    if (choice.toLocaleLowerCase() === 'add') {
        return total = num1 + num2
    } else if (choice.toLocaleLowerCase() === 'subtract') {
        return total = num1 - num2
    } else if (choice.toLocaleLowerCase() === 'multiply') {
        return total = num1 * num2
    } else if (choice.toLocaleLowerCase() === 'divide') {
        return total = num1 / num2
    } else {
        return total = 0;
    }
}

const myNumber = console.log(`Multiply`, calculator(10,12,`multiply`));
const myNumber2 = console.log(`Divide`, calculator(100,12,`divide`));
const myNumber3 = console.log(`Add`, calculator(1018736,1208,`add`));
const myNumber4 = console.log(`Subtract`, calculator(118736,1208,`SUBTRACT`));






// console.log(`my return function ` + returnMyAge());

// let multiply: () => number = returnMyAge;

// console.log(multiply());

// // objects
// // let data = {
// //   name: "jon",
// //   age: 34
// // };
// // console.table(data);
// // data = {
// //   age: 34,
// //   name: "jon"
// // };
// // console.table(data);

// let userData: { name: string; age: number } = {
//   name: "bill",
//   age: 8665857
// };

// console.table(userData)

// let userData2: { name: string, age: number } = { ...userData };
// userData2 = {
//   a: 17,
//   n: 'bacon',
// }
// console.table(userData2);