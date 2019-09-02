const mysql = require("mysql");

module.exports = ()=>{
    return mysql.createConnection({
        user:"siintech_is",
        host:"siintechn.com",
        password:"gwE(,ew$)@LF",
        database:"siintech_eventos"
    });
}