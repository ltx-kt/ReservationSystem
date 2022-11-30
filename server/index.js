const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//
// pool.query(`CREATE TABLE IF NOT EXISTS dining_tables (
//             table_ID int NOT NULL,
//             seat_number int NOT NULL,
//             time_reserved DATE,
//             reserved_name VARCHAR(50),
//             reserved_phone VARCHAR(50),
//             reserved_email VARCHAR(50) NULL,
//             PRIMARY KEY (table_ID)
//             );`);

// pool.query(`CREATE TABLE IF NOT EXISTS registered_users(
//             preferred_diner_num SERIAL PRIMARY KEY,
//             first_name VARCHAR(50) NOT NULL,
//             last_name VARCHAR(50) NOT NULL,
//             mailing_address VARCHAR(50) NOT NULL,
//             billing_address VARCHAR(50) NOT NULL,
//             earned_points int NOT NULL,
//             preferred_payment VARCHAR(50) NOT NULL
//         );`);


//create
// app.post("")

//get all accounts
app.get('/users', async (req, res) => {
    try {
        // await pool.connect();
        const allusers = await pool.query("SELECT * FROM accounts;")
        // res.send('hello world');
        res.json(allusers);
        // console.error("lol");
        // await pool.end();

    } catch (err) {
        console.error(err.message);
    }
});

app.post('/api/insert', async (req, res) => {
    const { first_name, last_name, email, pwd, cpwd } = req.body;
    console.log(req.body);
    try {
        const insertUser = await pool.query("INSERT INTO accounts (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)",
        [first_name.toLowerCase(), last_name.toLowerCase(), email.toLowerCase(), pwd])
        res.json(insertUser);

    } catch (err) {
        console.error(err.message);
    }
});

app.get('/api/getaccount/:email&:pass', async (req, res) => {
    try {
        const { email, pass } = req.params;
        const user = await pool.query("SELECT * FROM accounts WHERE email = $1 and password = $2", [email, pass]);
        console.log(email, pass);
        res.json(user);
        if (user.rows.length === 0) {
            return res.status(401).json("Invalid Credential");
          }
    } catch (err) {
        console.error(err.message);
    } 
});

app.get('/api/getaccount/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const user = await pool.query("SELECT * FROM accounts WHERE email = $1", [email]);
        console.log(email);
        res.json(user);
        if (user.rows.length === 0) {
            return res.status(401).json("Invalid Credential");
          }
    } catch (err) {
        console.error(err.message);
    } 
});


const port = 5001
app.listen(port, () => {
    console.log(port);
});