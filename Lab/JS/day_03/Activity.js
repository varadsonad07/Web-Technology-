// 1) difference between arrow function and simple function
// 2) write a code for a arrow function with two example
// 3) write a code for switch case
// 4) how to use truthy and falsy values in java script
// 5) how to use ternary operators in java script
// 6) write a code for how to use loops in array
// 7) difference between for of and for in loop
// 8) how to use map and filter function in java script
// 9) how to use reduce method in java script


// 1) difference between arrow function and simple function
// simple function
function f1 (num1){
    return num1;
}
console.log(f1(10));


// arrow functiom
const f2 = (num2) => {
    return num2;
}
console.log(f2(20));

// 2) write a code for a arrow function with two example
const add = (a,b) => {
    return a + b;
}
console.log(add(2,5));

const iseven = (num3) => num3 % 2 == 0;
console.log(iseven(3));
console.log(iseven(6));


// 3) write a code for switch case
let day = 3;

switch (day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    default:
        console.log("invalid day");
        break;
}



// 4) how to use truthy and falsy values in java script

//Falsy values (हे false मानले जातात)
/*
false
0
(empty string)
null
undefined
NaN
बाकी सर्व Truthy */

// example
let value = "";

if (value) {
  console.log("Truthy");
}
else {
  console.log("Falsy"); // Falsy
}



// 5) how to use ternary operators in java script
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);


// 6) write a code for how to use loops in array
let array = [1,2,3,4,5];

for(let i = 0 ; i < array.length ; i++){
    console.log(array[i]);
}


// 7) difference between for of and for in loop
// for of
let arr = [10, 20, 30];
for (let val of arr) {
  console.log(val); // 10 20 30
}

// for in
for (let index in arr) {
  console.log(index); // 0 1 2
}