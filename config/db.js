const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "2407",
    database: "express",
    port: 5432,
});

module.exports = pool;