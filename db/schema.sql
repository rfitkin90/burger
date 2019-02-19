-- DROP DATABASE IF EXISTS burgers_db;
-- CREATE DATABASE burgers_db;
-- USE burgers_db;

USE heroku_643e336200a45f0;

DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    burger_name VARCHAR(40) NOT NULL,
    devoured BOOLEAN DEFAULT false
);