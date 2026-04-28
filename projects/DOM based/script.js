// Select elements
let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

// Add Task Event
addBtn.addEventListener("click", function () {

    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new list item
    let li = document.createElement("li");
    li.textContent = taskText;

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.backgroundColor = "red";

    // Delete task
    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
});