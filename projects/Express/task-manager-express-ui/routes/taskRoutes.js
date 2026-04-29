
const express = require("express");
const router = express.Router();

let tasks = require("../data/tasks");

// GET all
router.get("/", (req, res) => {
    res.json(tasks);
});

// ADD
router.post("/", (req, res) => {
    const task = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };
    tasks.push(task);
    res.json(task);
});

// UPDATE
router.put("/:id", (req, res) => {
    const t = tasks.find(x => x.id == req.params.id);
    if (!t) return res.status(404).send("Not found");
    t.title = req.body.title ?? t.title;
    t.completed = req.body.completed ?? t.completed;
    res.json(t);
});

// DELETE
router.delete("/:id", (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.json({ message: "Deleted" });
});

module.exports = router;
