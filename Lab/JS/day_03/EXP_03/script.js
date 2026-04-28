document.getElementById("myForm").addEventListener("submit", function(event)
{
    event.preventDefault();

    // get values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    // validation
    if(name === "" || email === "" || password === "")
    {
        message.innerHTML = "All fields are required!";
        message.style.color = "red";
        return;
    }

    if(password.length < 6)
    {
        message.innerHTML = "Password must be at least 6 characters!";
        message.style.color = "red";
        return;
    }

    // DOM manipulation
    message.innerHTML = "Registration Successful!";
    message.style.color = "green";

    // change background color using DOM
    document.body.style.backgroundColor = "#d4edda";
});
