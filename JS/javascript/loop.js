// loop in JS


// for loop
// syntax:
// for(initialization; consition; increment/decrement){}


// example
console.log("for loop");
for(let i=1; i<=10; i++){
    console.log(i);
}


// while loop
// syntax:
// while(condition){
// code}
// increment/decrement
// }


console.log("while loop");
let countdown=15;
while(countdown>=0){
    console.log(countdown);
    countdown--;
}


// do while loop
console.log("Do-While Loop")
// syntax:
/*
do{
code
increment/decrement;
} while(condition);
*/


let number=-1;
do{
    console.log(number)
    number++;
}while(number>10);


// for - of loop
console.log("For of loop");
// string, array, map, set
let assignments=["FDD","ISFT","ICS"]
for (const subject of assignments){
    console.log(subject);
}


// for in loop
let movie={
    name:"ramayana",
    lead_actor:"ranbir kapoor",
    character:"shree ram"
};
console.log("for in loop");
for(const moviekey in movie){
    console.log(moviekey,movie[moviekey]);
}
