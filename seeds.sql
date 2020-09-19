INSERT INTO department (section)
VALUES ("HR"), ("Tech"), ("Sales"),("Operations");

INSERT INTO role (title, salary, department_id)
VALUES("Benefits","75000", 1), ("Web Dev", "80000", 2), ("Sales Manager","100000",3),("Payroll","75000", 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jeff", "Miller",3),("Mariah", "Cooper",3, null), 
("Constance", "Battle",1, null), ("Jacob", "Langston",4, null);



