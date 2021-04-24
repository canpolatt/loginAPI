const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"admin",
    database:"login_database",
    host:"localhost",
    port:"5432"
});

module.exports=pool;
