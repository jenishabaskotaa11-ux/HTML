// mobile,tablet,laptop,iphone

// function in js
console.log("function in js");

// 1. function declaration
// traditional way to create function
// hoisted function- function can be called at any line i.e before and after declaration

// syntax:
/* 
function functionName(){
code;}
*/
// write a js code to display "good morning semII" using function

function greet(){
    console.log("good morning semII");
}
greet();

// function hoisting
// property of javascript
//  we can call JS function at any line in the file (before and after the declaration).

// write a js code to call func_hoist and write code "hello world" inside it.
func_hoist()
function func_hoist(){
    console.log("hello world");
}


// function expression
// function is stored in a variable
// semi colon is used at the end of the line
// not hoisted
console.log("function expression");
const add=function(first,second){
    return first+second;
};
console.log(add(5,6));


// arrow function
// can be used to represent functin in a short form
// function keyword is not necessary
// () is used to receive parameters
// {} is used to write code inside it
// semicolon is used at the end of the line.
console.log("arrow function");
const sum=(first,second)=>{return first+second};
console.log(sum(10,20));




// html:
// list, types, differences
// table
// Form
// anchor Tag , image , alt ko Worker, heading paragraph underline Tag
// css:
// types of css 
// selectors 
// box model 
// flex 
// border and border radius 
// position 
// js:
// varibale , declaration , let const keywords 
// data type and variables 
// loop and function 
// task:
// basic code change like color change, font change, change something to link 
