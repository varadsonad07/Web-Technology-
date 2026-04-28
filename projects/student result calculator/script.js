function calculateResult() {

    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);

    let total = s1 + s2 + s3;
    let percentage = total / 3;
    let grade;

    if (percentage >= 75) {
        grade = "A Grade";
    }
    else if (percentage >= 60) {
        grade = "B Grade";
    }
    else if (percentage >= 40) {
        grade = "C Grade";
    }
    else {
        grade = "Fail";
    }

    document.getElementById("result").innerHTML =
        "Total: " + total +
        "<br>Percentage: " + percentage.toFixed(2) + "%" +
        "<br>Grade: " + grade;
}