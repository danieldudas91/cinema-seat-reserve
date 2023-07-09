const db = require("mysql2")
const dotenv = require("dotenv")
dotenv.config()


const pool = db.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE  
}).promise()

module.exports = {pool}