DROP DATABASE IF EXISTS tmp_nest_db;
CREATE DATABASE tmp_nest_db;

USE tmp_nest_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT primary key,
  name varchar(30),
  age int
);

INSERT INTO users (id, name, age) VALUES (1, 'User1', 11);
INSERT INTO users (id, name, age) VALUES (2, 'User2', 12);
INSERT INTO users (id, name, age) VALUES (3, 'User3', 13);
INSERT INTO users (id, name, age) VALUES (4, 'User4', 14);
INSERT INTO users (id, name, age) VALUES (5, 'User5', 15);
INSERT INTO users (id, name, age) VALUES (6, 'User6', 16);
INSERT INTO users (id, name, age) VALUES (7, 'User7', 17);
INSERT INTO users (id, name, age) VALUES (8, 'User8', 18);
INSERT INTO users (id, name, age) VALUES (9, 'User9', 19);
INSERT INTO users (id, name, age) VALUES (10, 'User10', 20);
