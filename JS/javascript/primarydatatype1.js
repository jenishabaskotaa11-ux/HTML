// Primary DataType Day 2:

// 6. String Type:
// anything enclosed by single code ' ', double code" ", and back tick ` ` 
let block="Laliguras";
let sentence=`
Nepal is prone to natural disaster.
Recently, high himalayas of Nepal was hit by flash floods in September.
`;
console.log("String Type");
console.log(block);
console.log(sentence);
console.log(typeof sentence); //checks variable type

// Symbol()
// immutable type, used in key of an object
let key=Symbol('11011');
console.log("Symbol Type");
console.log(key, typeof key)