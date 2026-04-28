// get form
document.getElementById("loginForm").addEventListener("submit", function(event)
{
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    // check empty
    if(email === "" || password === "")
    {
        message.style.color = "red";
        message.innerHTML = "Please fill all fields!";
        return;
    }

    // password check
    if(password.length < 6)
    {
        message.style.color = "red";
        message.innerHTML = "Password must be at least 6 characters!";
        return;
    }

    // success
    message.style.color = "green";
    message.innerHTML = "Login Successful!";
});
