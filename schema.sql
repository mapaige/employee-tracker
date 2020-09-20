DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;
 
CREATE TABLE department (
 id INT AUTO_INCREMENT NOT NULL ,
  section VARCHAR (30) NOT NULL,
  FOREIGN KEY (department_id)
  PRIMARY KEY (id),
);

CREATE TABLE role (
  id INT AUTO_INCREMENT NOT NULL ,
  title  VARCHAR (30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
   FOREIGN KEY (department_id), 
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL ,
  first_name VARCHAR (30) NOT NULL,
  last_name VARCHAR (30) NOT NULL,
  role_id  INT ,
  manager_id INT,
  FOREIGN KEY (manager_id),
  FOREIGN KEY (role_id),
  PRIMARY KEY (id)
);

