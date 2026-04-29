// Connect To WebSocket Server
const socket = new WebSocket("ws://localhost:5000");

// Receive Messages
socket.onmessage = (event) => {

    const chatBox = document.getElementById("chatBox");

    const message = document.createElement("p");

    message.textContent = event.data;

    chatBox.appendChild(message);

};

// Send Message
function sendMessage() {

    const input = document.getElementById("message");

    socket.send(input.value);

    input.value = "";

}