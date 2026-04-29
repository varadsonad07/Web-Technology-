
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);

  db.query(
    'INSERT INTO users(name,email,password) VALUES(?,?,?)',
    [name, email, hashPassword],
    (err, result) => {
      if (err) return res.send(err);
      res.send('Registered');
    }
  );
});

app.post('/login', (req, res) => {
  const { email } = req.body;

  db.query(
    'SELECT * FROM users WHERE email=?',
    [email],
    (err, result) => {
      if (err) return res.send(err);
      res.json({ user: result[0] });
    }
  );
});

app.post('/add-task', (req, res) => {
  const { title, status, deadline, user_id } = req.body;

  db.query(
    'INSERT INTO tasks(title,status,deadline,user_id) VALUES(?,?,?,?)',
    [title, status, deadline, user_id],
    (err, result) => {
      if (err) return res.send(err);
      res.send('Task Added');
    }
  );
});

app.get('/tasks/:id', (req, res) => {
  db.query(
    'SELECT * FROM tasks WHERE user_id=?',
    [req.params.id],
    (err, result) => {
      if (err) return res.send(err);
      res.json(result);
    }
  );
});

app.delete("/delete-task/:id", (req, res) => {
  const sql = "DELETE FROM tasks WHERE id=?";

  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.send(err);
    res.send("Task Deleted");
  });
});

app.listen(5000, () => {
  console.log('Server running');
});
