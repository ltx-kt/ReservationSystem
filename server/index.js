const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//
pool.query(`CREATE TABLE IF NOT EXISTS dining_tables (
            table_ID int NOT NULL,
            seat_number int NOT NULL,
            time_reserved DATE,
            reserved_name VARCHAR(50),
            reserved_phone VARCHAR(50),
            reserved_email VARCHAR(50) NULL,
            PRIMARY KEY (table_ID)
            );`)

pool.query(`CREATE TABLE IF NOT EXISTS registered_users(
            preferred_diner_num SERIAL PRIMARY KEY,
            first_name VARCHAR(50) NOT NULL,
            last_name VARCHAR(50) NOT NULL,
            mailing_address VARCHAR(50) NOT NULL,
            billing_address VARCHAR(50) NOT NULL,
            earned_points int NOT NULL,
            preferred_payment VARCHAR(50) NOT NULL
        );`)
//create
// app.post("")

//get a user

//update user


app.listen(5432, () => {
    console.log('server started 5432');
});