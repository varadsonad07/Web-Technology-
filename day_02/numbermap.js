const balance = new Number(100000000);
console.log(balance);
console.log(typeof balance); // object
console.log(balance.toString());
console.log(balance.toExponential());
console.log(balance.toLocaleString());// use this method for undertsnading a large size of numbers like as (10,00,000)
console.log(balance.toFixed(4)); // when we build e-commerce website and precision value is so long we use fixed method \
console.log(balance.toPrecision());
console.log(balance.valueOf());

console.log(balance.toString().length);

let a = new Number(200);
console.log(a.toString().length);

const num = balance.valueOf();
console.log(num);
console.log(typeof num); // number
console.log(num.toLocaleString("en-IN")); // use this method for undertsnading a large size of numbers like as (10,00,000)

// Math operations

console.log(Math);
console.log(Math.abs(-4)); // it gives ablosoulte value when we use negative value na potive will be positive 
console.log(Math.floor(4.6)); // it rounds the value to nearest integer but in lower value
console.log(Math.ceil(4.6)); // it rounds the value to nearest integer but in upper value
console.log(Math.round(4.6));// it rounds the value to nearest integer
console.log(Math.round(4.3));// it rounds the value to nearest integer
console.log(Math.min(1,2,3,4,));
console.log(Math.max(1,2,3,4,));

console.log(Math.random(1,2,3,4,5,6));
