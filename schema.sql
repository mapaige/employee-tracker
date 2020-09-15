DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;
 
CREATE TABLE department (
 id INT  AUTO_INCREMENT NOT NULL ,
  section VARCHAR (30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT  AUTO_INCREMENT NOT NULL,
  title VARCHAR (30) NULL,
  salary DECIMAL NULL,
  department_id INT NULL FOREIGN KEY, 
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT  AUTO_INCREMENT NOT NULL,
  first_name VARCHAR (30),
  last_name VARCHAR (30),
  role_id  INT FOREIGN KEY,
  manager_id INT  FOREIGN KEY,
  PRIMARY KEY (id)
);
