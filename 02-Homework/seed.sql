DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;
 
CREATE TABLE department (
 id INT NOT NULL  AUTO INCREMENT,
  name VARCHAR (30) NULL,

);

CREATE TABLE role (
  id INT NOT NULL AUTO INCREMENT,
  title VARCHAR (30),
  salary DECIMAL,
  department_id INT, 
  PRIMARY KEY (id),
);

CREATE TABLE employee (
  id INT NOT NULL AUTO INCREMENT,
  first_name VARCHAR (30),
  last_name VARCHAR (30),
  role_id INT ,
  manager_id INT,
  PRIMARY KEY (id)
);


INSERT INTO department (name)
VALUES ("HR"), ("Tech"), ("Sales"),("Operations");

INSERT INTO role(title, salary, department_id)
VALUES("Benefits","75000", 1), ("Web Dev", "80000", 2), ("Sales Manager","100000",3),("Payroll","75000", 4) ;

INSERT INTO employee (first_name, last_name, role_id, manager)
VALUES ("Jeff", "Miller","Sales Lead",),("Mariah", "Cooper","Salesperson", 2), ("Constance", "Battle","Secretary", 3), ("Jacob", "Langston", 3);


SELECT 

e. id AS id,
e. first_name AS First,
e. last_name AS Last,
e. role_id as Role,
s. salary as Salary,
m. last_name AS Manager,
d. name AS Department 


-- JOIN employee as employee

FROM employee e
LEFT JOIN employee m 
ON e.manager_id = manager.id 

-- JOIN role table to employee table 
LEFT JOIN role r 
ON e.role_id =  s.title

--  JOIN department to role table

LEFT JOIN department d 
ON r.department_id = d.id 





 