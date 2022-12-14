-- CREATE DATABASE IF NOT EXISTS reservation;

DROP TABLE IF EXISTS dining_tables;
DROP TABLE IF EXISTS registered_users;
DROP TABLE IF EXISTS accounts;
DROP TABLE IF EXISTS todo;

CREATE TABLE accounts(
    userid SERIAL PRIMARY KEY,
    first_name varchar(255),
    last_name varchar(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE dining_tables (
    table_ID int NOT NULL,
    seat_number int NOT NULL,
    time_reserved DATE,
    reserved_name VARCHAR(50),
    reserved_phone VARCHAR(50),
    reserved_email VARCHAR(50) NULL,
    PRIMARY KEY (table_ID)
);

CREATE TABLE registered_users(
    preferred_diner_num SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    mailing_address VARCHAR(50) NOT NULL,
    billing_address VARCHAR(50) NOT NULL,
    earned_points int NOT NULL,
    preferred_payment VARCHAR(50) NOT NULL,
    userid INT,
    CONSTRAINT fk_accounts
        FOREIGN KEY(userid) 
	        REFERENCES accounts(userid)
	        ON DELETE CASCADE
);

CREATE TABLE reservations(
    first_name VARCHAR(250) NOT NULL,
    last_name VARCHAR(250) NOT NULL,
    is_guest BOOLEAN NOT NULL,
    num_seats VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    phone VARCHAR(250) NOT NULL,
    mailing_address VARCHAR(250) NOT NULL,
    billing_address VARCHAR(250) NOT NULL,
    earned_points int NOT NULL,
    preferred_payment VARCHAR(250) NOT NULL,
    userid INT,
    CONSTRAINT fk_accounts
        FOREIGN KEY(userid) 
	        REFERENCES accounts(userid)
	        ON DELETE CASCADE
);


-- Using these for demo
CREATE TABLE accounts(
    userid SERIAL PRIMARY KEY,
    first_name varchar(255),
    last_name varchar(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE reservations(
    time_slot VARCHAR(250),
    first_name VARCHAR(250) NOT NULL,
    last_name VARCHAR(250) NOT NULL,
    num_seats VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    phone VARCHAR(250) NOT NULL,
    mailing_address VARCHAR(250) NOT NULL,
    billing_address VARCHAR(250) NOT NULL,
    preferred_payment VARCHAR(250) NOT NULL
);