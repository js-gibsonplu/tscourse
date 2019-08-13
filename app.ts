let myName = 'jonathan';

let animals = {
    cat : 'lion',
    dog : 'hyena',
    snake : 'boa'
}

const newNum = 19191919191;


let number = 38; console.log(number);
number = 1; console.log(number);

let age:number;
age = 29;
console.log(age);
age = 34;
console.log(age);

let names: string[] = ['james', 'billy','steve']
console.log(names);

let mine: [number, string, boolean]= [12, 'twelve', true];
console.log(mine)


enum namesEnum {
    'jonathan' = 16,
    'nic',
    'john'
}

let myNamesEnum: namesEnum = namesEnum.john;
console.log(myNamesEnum);
console.log(namesEnum);
console.log(namesEnum[17]);

function returnMyAge() :number {
    return newNum;
}

console.log(`my return function ` + returnMyAge());

let multiply: () => number = returnMyAge;

console.log(multiply());