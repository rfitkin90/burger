-- DROP DATABASE IF EXISTS burgers_db;
-- CREATE DATABASE burgers_db;
-- USE burgers_db;

USE w3esnx1w0w5vpyqr;

DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    burger_name VARCHAR(40) NOT NULL,
    devoured BOOLEAN DEFAULT false
    -- createdAt TIMESTAMP NOT NULL
);

INSERT INTO burgers (burger_name)
VALUES ("Double Double");

INSERT INTO burgers (burger_name)
VALUES ("Western Bacon Cheeseburger");

INSERT INTO burgers (burger_name)
VALUES ("Guacamole Bacon Burger");