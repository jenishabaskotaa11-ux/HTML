// operator in JS
console.log("Operator in JS");
// 1. arithmetic operator -(+,-,/,*,%,**,++,--)
console.log("\nArithmetic operator");
console.log("a. %- arithmetic operator"); //find the remainder during division
console.log(5%2, 3%2, 7%2, 9%2); //odd number
console.log(2%2, 4%2, 6%2, 8%2); //even number

console.log("\nb. ** - exponential operator");
//gives power too the base
// syntax:base ** power
console.log(3**2);

console.log("\nc. ++ - increment operator");
// increase value by 1.
console.log("preincrement case:")
let first=10
console.log(++first);
console.log("post increment case");
let second=20;
console.log(second++);
console.log("final", first, second);

// decrease value by 1.
console.log("predecrement case:");
let a=10
console.log(--a);
console.log("postdecrement case");
let b=10
console.log(b--)
console.log("final", a, b)


// 2. comparison operator - (>, <, >=, <=, ==, !=, ===, !===)
console.log("\nComparison operator");
console.log("\na. == 'compare value'");
let number=777;
let jackpot="777";
console.log(number==jackpot); //compare value and returns true if value is same regardless of the data type.

console.log("\nb. != 'compare value'");
// returns true if bith values are different.
let age=16;
date=17;
console.log(age!=date); //returns true, both data are different

console.log("\nc. === 'compare value with data type'"); //also called strict comparison bcuz compares both value and data type 
let budget=6000;
let fees=6000;
let cost="6000"
console.log(budget===fees); //returns true, value and data type both are same
console.log(budget===cost);  // returns false, value same, data type different

console.log("\nd. !== 'compare value with data type'");
let score="420";
let target=420;
let predicted_score=417;
console.log(score!==target);   //returns true, treats as diffeent value because data type is different
console.log(score!==predicted_score);  //returns true, treats as diffeent value because data type is different

