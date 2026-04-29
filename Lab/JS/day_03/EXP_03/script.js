// Array to store students
let students = [];

// Arrow Function to add student
const addStudent = () => {

    let name = document.getElementById("name").value;
    let marks = Number(document.getElementById("marks").value);

    // Control Statement
    if (name === "" || marks === 0) {
        document.getElementById("message").innerHTML =
            "Please enter valid details!";
        return;
    }

    // Object creation
    let student = {
        name: name,
        marks: marks
    };

    // Array Method -> push()
    students.push(student);

    document.getElementById("message").innerHTML =
        "Student Added Successfully!";

    displayStudents();
};

// Normal Function
function displayStudents() {

    let list = document.getElementById("studentList");
    list.innerHTML = "";

    // Loop
    for (let i = 0; i < students.length; i++) {

        let li = document.createElement("li");

        li.innerHTML =
            students[i].name + " - " + students[i].marks;

        list.appendChild(li);
    }
}

// Arrow Function with filter()
const showTopStudents = () => {

    // Array Method -> filter()
    let topStudents = students.filter(student => student.marks >= 75);

    let result = "";

    // Loop
    topStudents.forEach(student => {
        result += student.name + " ";
    });

    // Control Statement
    if (result === "") {
        result = "No Top Students";
    }

    document.getElementById("message").innerHTML =
        "Top Students: " + result;
};