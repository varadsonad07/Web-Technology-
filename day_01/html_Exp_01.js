// 1) display student information
// 2) number is odd or even
// 3) display numbers from 1 to n
// 4) student passed or failed based on marks

// 1) display student information
document.writeln("-----1) Student Information -----");
let studentName = "varad sonad";
let studentAge = 21;
let studentEmail = "varad@example.com";
let studentMarks = 85;

document.writeln("<br>Student Information:");
document.writeln("<br>Name:", studentName);
document.writeln("<br>Age:", studentAge);
document.writeln("<br>Email:", studentEmail);
document.writeln("<br>Marks:", studentMarks);
document.writeln("<br>------------------------------");

// 2) number is odd or even
document.writeln("<br>----- 2) Odd or Even Check -----");
let number = 7;

if (number % 2 === 0) {
    document.writeln("<br>", number, "is an Even number.");
} else {
    document.writeln(number, "<br>is an Odd number.");
}
document.writeln("<br>------------------------------");
// 3) display numbers from 1 to n
document.writeln("<br>----- 3) Numbers from 1 to n -----");
let n = 10;

document.writeln("<br>Numbers from 1 to", n, ":");
for (let i = 1; i <= n; i++) {
    document.writeln(i);
}
document.writeln("<br>------------------------------");

// 4) student passed or failed based on marks
document.writeln("<br>----- 4) Pass or Fail Check -----");
let passingMarks = 40;

if (studentMarks >= passingMarks) {
    document.writeln(studentName, "<br>has Passed with", studentMarks, "marks.");
} else {
    document.writeln(studentName, "<br>has Failed with", studentMarks, "marks.");
}
document.writeln("<br>------------------------------");