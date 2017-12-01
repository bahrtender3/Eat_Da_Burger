-- CREATE DATABASE burgers_db;

-- USE burgers_db;

CREATE TABLE burgers(
	ID int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255),
	devoured BOOLEAN default false,
	date TIMESTAMP,
	PRIMARY KEY (ID)
);

