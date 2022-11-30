const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "reservation",
    password: "Long2023!",
    port: 5432
})

module.exports = pool;