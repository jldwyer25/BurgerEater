CREATE DATABASE b08eau7s7v1gf9ub;
USE b08eau7s7v1gf9ub;

-- Create the table tasks.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN DEFAULT FALSE,
PRIMARY KEY (id)
);