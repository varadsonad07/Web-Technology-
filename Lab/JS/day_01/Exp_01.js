// 1) display student information
// 2) number is odd or even
// 3) display numbers from 1 to n
// 4) student passed or failed based on marks

// 1) display student information
console.log("-----1) Student Information -----");
let studentName = "varad sonad";
let studentAge = 21;
let studentEmail = "varad@example.com";
let studentMarks = 85;

console.log("Student Information:");
console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Email:", studentEmail);
console.log("Marks:", studentMarks);
console.log("------------------------------");

// 2) number is odd or even
console.log("----- 2) Odd or Even Check -----");
let number = 7;

if (number % 2 === 0) {
    console.log(number, "is an Even number.");
} else {
    console.log(number, "is an Odd number.");
}
console.log("------------------------------");

// 3) display numbers from 1 to n
console.log("----- 3) Numbers from 1 to n -----");
let n = 10;

console.log("Numbers from 1 to", n, ":");
for (let i = 1; i <= n; i++) {
    console.log(i);
}
console.log("------------------------------");

// 4) student passed or failed based on marks
console.log("----- 4) Pass or Fail Check -----");
let passingMarks = 40;

if (studentMarks >= passingMarks) {
    console.log(studentName, "has Passed with", studentMarks, "marks.");
} else {
    console.log(studentName, "has Failed with", studentMarks, "marks.");
}
console.log("------------------------------");