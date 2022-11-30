-- CREATE DATABASE IF NOT EXISTS reservation;

DROP TABLE IF EXISTS dining_tables;
DROP TABLE IF EXISTS registered_users;
DROP TABLE IF EXISTS accounts;
DROP TABLE IF EXISTS todo;

CREATE TABLE accounts(
    userid SERIAL PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255)
    -- PRIMARY KEY(userid)
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