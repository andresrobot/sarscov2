CREATE DATABASE database_master;

USE database_master;

CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    nombre VARCHAR(25) NOT NULL,
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;

-- LINKS TABLES
CREATE TABLE links(
    id INT(11)NOT NULL,
    title VARCHAR(150) NOT NULL,
    url VARCHAR(255) NOT NULL,
    description TEXT,
    user_id INT(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE links
    ADD PRIMARY KEY (id);

ALTER TABLE links
    MODIFY id INT NOT NULL AUTO_INCREMENT = 2;

CREATE TABLE registros(
    id INT NOT NULL,
    nombre VARCHAR(150) NOT NULL,
    apellidoP VARCHAR(255) NOT NULL,
    apellidoM VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    description TEXT,
    proyecto VARCHAR(255),
    user_id INT,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);


ALTER TABLE registros
    ADD PRIMARY KEY (id);

ALTER TABLE registros
    MODIFY id INT NOT NULL AUTO_INCREMENT = 1;
CREATE TABLE temperaturas(
    id INT NOT NULL,
    temperatura FLOAT NOT NULL,
    reg_id INT,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (reg_id) REFERENCES registros(id)
);


ALTER TABLE temperaturas
    ADD PRIMARY KEY (id);

ALTER TABLE temperaturas
    MODIFY id INT NOT NULL AUTO_INCREMENT = 1;

DESCRIBE links;