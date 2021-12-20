DROP DATABASE IF EXISTS tmp_nest_db;
CREATE DATABASE tmp_nest_db;

USE tmp_nest_db;

DROP TABLE IF EXISTS tests;

CREATE TABLE tests (
  id int NOT NULL AUTO_INCREMENT primary key,
  name varchar(30),
  score int
);

INSERT INTO tests (id, name, score) VALUES (1, 'Test1', 11);
INSERT INTO tests (id, name, score) VALUES (2, 'Test2', 12);
INSERT INTO tests (id, name, score) VALUES (3, 'Test3', 13);
INSERT INTO tests (id, name, score) VALUES (4, 'Test4', 14);
INSERT INTO tests (id, name, score) VALUES (5, 'Test5', 15);
INSERT INTO tests (id, name, score) VALUES (6, 'Test6', 16);
INSERT INTO tests (id, name, score) VALUES (7, 'Test7', 17);
INSERT INTO tests (id, name, score) VALUES (8, 'Test8', 18);
INSERT INTO tests (id, name, score) VALUES (9, 'Test9', 19);
INSERT INTO tests (id, name, score) VALUES (10, 'Test10', 20);
