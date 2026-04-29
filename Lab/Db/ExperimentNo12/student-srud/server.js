const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manager",
    database: "studentdb"
});

db.connect((err) => {
    if (err) {
        console.log("Database Connection Failed");
    } else {
        console.log("Connected to MySQL");
    }
});

// Read Data
app.get("/", (req, res) => {

    db.query("SELECT * FROM students", (err, result) => {
        if (err) throw err;

        res.render("index", { students: result });
    });
});

// Insert Data
app.post("/add", (req, res) => {

    const { name, email, course } = req.body;

    const sql =
        "INSERT INTO students(name, email, course) VALUES (?, ?, ?)";

    db.query(sql, [name, email, course], (err) => {
        if (err) throw err;

        res.redirect("/");
    });
});

// Delete Data
app.get("/delete/:id", (req, res) => {

    const id = req.params.id;

    db.query("DELETE FROM students WHERE id=?", [id], (err) => {
        if (err) throw err;

        res.redirect("/");
    });
});

app.listen(3000, () => {
    console.log("Server Running on http://localhost:3000");
});