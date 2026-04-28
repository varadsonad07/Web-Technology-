// const is used for values that should NOT change
// const a = "vbsonad07@gmail.com";
// a = "xyz@gmail.com"; ❌ Error: const value cannot be changed
// console.log(a);

// let and var can be changed
let a = 10;      // let has block scope
var b = 20;      // var has function scope

{
    let a = 30;  // this 'a' works only inside this block
    var b = 40;  // this 'b' changes the outer 'b'
    console.log(a, b); // 30 40
}

console.log(a, b); // 10 40
console.log("type of a is :", typeof(a)); // number
console.log("type of b is :", typeof(b)); // number


let c = "vbsonad@gmail.com"; // string value
console.log("c = ", c);
console.log("type of c is :", typeof(c)); // string


var d = "hello world";
console.log(d);

{
    var d = "hello universe"; // var ignores block and overwrites value
    console.log(d);
}

console.log(d); // hello universe
console.log("type of d is :", typeof(d)); // string


let e = true; // boolean value
console.log(e);
console.log("type of e is :", typeof(e)); // boolean
