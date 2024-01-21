require("dotenv").config();

const Pool = require("pg").Pool;

if (!process.env.DB_NAME || !process.env.DB_PASSWORD || !process.env.DB_PORT || !process.env.DB_USERNAME) {
    console.log("Fill in the database information");
} else {
    const pool = new Pool({
        user: `${process.env.DB_USERNAME}`,
        password: `${process.env.DB_PASSWORD}`,
        database: `${process.env.DB_NAME}`,
        port: process.env.DB_PORT,
    });
    module.exports = pool;
}
