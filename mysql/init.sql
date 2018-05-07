CREATE DATABASE mascots;
USE mascots;
CREATE TABLE mascots (
  id        INT         AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name      VARCHAR(16)                NOT NULL,
  file_name VARCHAR(16)                NOT NULL
);
INSERT INTO mascots (name, file_name) VALUES ('LISP Alien', 'lisp_alien.png'), ('Gopher', 'gopher.png'), ('Duke', 'duke.png'), ('Tux', 'tux.png'), ('Moby', 'moby.png');
