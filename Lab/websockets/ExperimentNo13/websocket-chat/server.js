const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();

app.use(express.static("public"));

// Create HTTP Server
const server = http.createServer(app);

// Create WebSocket Server
const wss = new WebSocket.Server({ server });

// WebSocket Connection
wss.on("connection", (ws) => {

    console.log("Client Connected");

    // Receive Message
    ws.on("message", (message) => {

        console.log("Received:", message.toString());

        // Send Message To All Clients
        wss.clients.forEach((client) => {

            if (client.readyState === WebSocket.OPEN) {

                client.send(message.toString());

            }

        });

    });

    ws.on("close", () => {

        console.log("Client Disconnected");

    });

});

// Start Server On Port 5000
server.listen(5000, () => {

    console.log("Server Running on http://localhost:5000");

});