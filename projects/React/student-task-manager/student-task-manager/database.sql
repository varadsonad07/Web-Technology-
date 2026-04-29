
CREATE DATABASE student_manager;

USE student_manager;

CREATE TABLE users (
 id INT PRIMARY KEY AUTO_INCREMENT,
 name VARCHAR(100),
 email VARCHAR(100),
 password VARCHAR(255)
);

CREATE TABLE tasks (
 id INT PRIMARY KEY AUTO_INCREMENT,
 title VARCHAR(255),
 status VARCHAR(50),
 deadline DATE,
 user_id INT
);
