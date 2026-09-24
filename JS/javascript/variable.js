// Javascript

// javascript is a dynamically typed programming language.

let number=10;

// variable declaration:
// var-global scope
// all the variables declared with var can be recreated and reassigned
var luckyNumber=777;
console.log(luckyNumber);

//recreated
var luckyNumber=555;
console.log(luckyNumber);

//reassigned
var luckyNumber=11;
console.log(luckyNumber);

// let-block scope
// can be reassigned but cannot be recreated
let fruit="Apple"
console.log("Variable declaration with let");
console.log("Fruit:",fruit);

//reassign
fruit="Orange"
console.log("Fruit Assignment:",fruit);

// const
// cannot reassign and recrate
const pi=3.14;
console.log("Variable Declaration with const")
console.log("Pi:",pi)

// pi=22/7 -- cannot be reassigned
// const pi=22/7  -- cannot be redeclared
