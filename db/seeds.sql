INSERT INTO department (name
VALUES ("Sales"),
       ("Field"),
       ("GIS");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Manager", 50.00, 1),
       ("Sales Person", 40.00, 1),
       ("Field Manager", 50.00, 2),
       ("Field Technician", 40.00, 2),
       ("GIS Manager", 50.00, 3),
       ("GIS Analyst", 45.00, 3),
       ("GIS Technician", 40.00, 3);
       
INSERT INTO employee (first_name, last_name, role_id, employee_id)
VALUES ("Beff","Jezos",1,1),
       ("Kenny","Klips",2,1),
       ("Gane","Joodale",3,3),
       ("Lagnar","Rodbrock",4,3),
       ("Dack","Jangermond",5,5),
       ("Pasan","Hiker",6,5),
       ("Reralt","Givia",7,5),
       ("Pathew","Mierce",7,5);