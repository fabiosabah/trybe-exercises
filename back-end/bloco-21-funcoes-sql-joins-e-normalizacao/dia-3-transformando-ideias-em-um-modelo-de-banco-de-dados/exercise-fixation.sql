CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;
CREATE TABLE employee(
	employee_id INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(255) NOT NULL,
	contato VARCHAR(50) NOT NULL,
	data_cadastro DATETIME NOT NULL
)
;
INSERT INTO employee (employee_id, `name`, last_name, email, contato, data_cadastro) VALUES
	(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '35-998552-1445', '2020-05-05 08:50:25'),
	(13, 'André', 'Freeman', 'andre1990@gmail.com', '47-99522-4996','2020-02-05 0:00:00'),
	(14, 'Cintia', 'Duval', 'cindy@outlook.com', '33-99855-4669', '2020-05-05 10:55:35'),
	(15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '33-99200-1556', '2020-05-05 11:45:40')
;

CREATE TABLE sector(
	sector_id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL
)
;
INSERT INTO sector (sector_id, `name`) VALUES
	(1, 'Vendas'),
    (2, 'Administração'),
    (3, 'Operacional'),
    (4, 'Estratégico'),
    (5, 'Marketing')
;

CREATE TABLE employee_sector(
	employee_id INT,
    sector_id INT,
    CONSTRAINT PRIMARY KEY(employee_id, sector_id),
    FOREIGN KEY (employee_id) REFERENCES employee (employee_id),
    FOREIGN KEY (sector_id) REFERENCES sector (sector_id)
    )
;
INSERT INTO employee_sector (employee_id, sector_id) VALUES
	(12, 1),
    (12, 2),
    (13, 3),
    (14, 1),
    (14, 4),
    (15, 5)
;
    
