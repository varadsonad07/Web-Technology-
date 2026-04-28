/*
// Node js -
- Node js is runtime environment that lates run JS code outside the browser.
- build on chromes v8 JS engine.
- used to create fats and scalable web applications.
*/

/*
// what is express js -
- express is a minimal and flexiable web frame work for node js
- it helps to handle routing , middle ware and HTTP request easily
- makes backend fast and simple to build web applications and APIs
*/

/*
// why use express js -
- simplifies sevrer creation in node js it offers powerful features in routing , middleware and HTTP request handling , static file serving and error handling
*/

/*
// NPM - Node package manager
- NPM is a tool used to install packages and libraries for node js projects from the node js ecosystem.
- it allows developers to easily manage dependencies and share code with other developers.
*/

/* Activitys -
// what is package.json-
// what is package-lock.json-
// difference between package.json and package-lock.json-

// what is devdependencies and Dependencies-
// difference between devdependencies and dependencies-

//HTTP methods -
- GET - used to retrieve data from a server
- POST - used to send data to a server to create a new resource
- PUT - used to update an existing resource on a server
- PATCH - used to partially update an existing resource on a server
- DELETE - used to delete a resource from a server

*/

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  const currentDate = new Date();
  res.send("Hello World! Current Date & Time: " + currentDate);
})

app.get('/about', (req, res) => {
  res.send("This is the about page.")
})

app.listen(port, () => {
  console.log("Server running on port " + port)
})
