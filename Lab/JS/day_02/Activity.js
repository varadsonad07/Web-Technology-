// ================== 1) Declarations ==================
document.write("<h3>1) Array, Function, Object Declaration</h3>");

let nums = [1,2,3,4,5];

function greet(name){
    return "Hello " + name;
}

let student = {
    name : "varad",
    age : 21 ,
    course : "aiml"
};

document.write("Array: " + nums + "<br>");
document.write("Greeting: " + greet("varad") + "<br>");
document.write("Student Object: " + JSON.stringify(student) + "<br><br><hr><br>");

// ================== 2) Reverse Number ==================
document.write("<h3>2) Reverse Number</h3>");

let num1 = 1234;
let str = String(num1);
let arr = str.split("").reverse();
let reverseNUM = Number(arr.join(""));

document.write("Original Number: " + num1 + "<br>");
document.write("Reversed Number: " + reverseNUM + "<br><br><hr><br>");

// ================== 3) Palindrome Number ==================
document.write("<h3>3) Check Palindrome Number</h3>");

let num = 121;
let s = String(num);
let rev = s.split("").reverse().join("");

if(s == rev){
    document.write(num + " is a Palindrome Number<br>");
}else{
    document.write(num + " is NOT a Palindrome Number<br>");
}
document.write("<br><hr><br>");

// ================== 4) Fibonacci Series ==================
document.write("<h3>4) Fibonacci Series</h3>");

let n = 10;
let a = 0 , b = 1;

document.write("First " + n + " Fibonacci numbers:<br>");

for (let i = 1 ; i <= n ; i++){
    document.write(a + " ");
    let next = a + b;
    a = b;
    b = next;
}
document.write("<br><br><hr><br>");

// ================== 5) Largest in Array ==================
document.write("<h3>5) Largest Element in Array</h3>");

let array = [10 , 55 , 23 , 99 , 12];
let largest = array[0];

for (let i = 1 ; i < array.length ; i++){
    if(array[i] > largest){
        largest = array[i];
    }
}

document.write("Array: " + array + "<br>");
document.write("Largest Element: " + largest + "<br><br><hr><br>");

// ================== 6) Remove Duplicates ==================
document.write("<h3>6) Remove Duplicates from Array</h3>");

let array1 = [1,1,2,3,4,5,5];
let array2 = [];

for(let i = 0 ; i <  array1.length ; i++){
    if(!array2.includes(array1[i])){
        array2.push(array1[i]);
    }
}

document.write("Original Array: " + array1 + "<br>");
document.write("Unique Array: " + array2 + "<br><br><hr><br>");

// ================== 7) Missing Number ==================
document.write("<h3>7) Find Missing Number</h3>");

let array3 = [1,2,3,5];
let numbers = 5;
let total = (numbers * (numbers + 1)) / 2;

let sum = 0;
for(let i = 0 ; i < array3.length ; i++){
    sum = sum + array3[i];
}

let missing = total - sum;

document.write("Array: " + array3 + "<br>");
document.write("Missing Number: " + missing + "<br><br><hr><br>");

// ================== 8) Reverse String ==================
document.write("<h3>8) Reverse String</h3>");

let string = "hello";
let array4 = string.split("").reverse();
let reversed = array4.join("");

document.write("Original: " + string + "<br>");
document.write("Reversed: " + reversed + "<br><br><hr><br>");

// ================== 9) Count Vowels ==================
document.write("<h3>9) Count Vowels in String</h3>");

let string2 = "Javascript is awesome";
let vowels = "aeiouAEIOU";
let count = 0;

for (let i = 0; i < string2.length; i++) {
  if (vowels.includes(string2[i])) {
    count++;
  }
}

document.write("String: " + string2 + "<br>");
document.write("Total Vowels: " + count + "<br><br><hr><br>");

// ================== 10) Palindrome String ==================
document.write("<h3>10) Check Palindrome String</h3>");

let string3 = "madam";
let reverse = string3.split("").reverse().join("");

if (string3 === reverse) {
  document.write(string3 + " is a Palindrome String<br>");
} else {
  document.write(string3 + " is NOT a Palindrome String<br>");
}
document.write("<br><hr><br>");

// ================== 11) Prime Number ==================
document.write("<h3>11) Check Prime Number</h3>");

let number = 29;
let isPrime = true;

if (number <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

document.write(number + (isPrime ? " is Prime" : " is Not Prime") + "<br><br><hr><br>");

// ================== 12) Factorial ==================
document.write("<h3>12) Factorial of Number</h3>");

let numer2 = 5;
let fact = 1;

for (let i = 1; i <= numer2; i++) {
  fact *= i;
}

document.write("Number: " + numer2 + "<br>");
document.write("Factorial: " + fact + "<br><br><hr><br>");

// ================== 13) Even or Odd ==================
document.write("<h3>13) Even or Odd Function</h3>");

function evenOrOdd(num) {
  return (num % 2 === 0) ? "Even" : "Odd";
}

document.write("10 is: " + evenOrOdd(10) + "<br>");
document.write("7 is: " + evenOrOdd(7) + "<br><br><hr><br>");

// ================== 14) Sum of Array ==================
document.write("<h3>14) Sum of Array Elements</h3>");

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

document.write("Array: [10, 20, 30] <br>");
document.write("Sum: " + sumArray([10, 20, 30]) + "<br>");