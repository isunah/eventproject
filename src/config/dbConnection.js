const mysql = require("mysql");
console.log(process.env.jsonConexion.user);
/*
{
    user:"siintech_is",
    host:"siintechn.com",
    password:"gwE(,ew$)@LF",
    database:"siintech_eventos"
}*/

module.exports = ()=>{
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:"",
        database:"siintech_eventos"
    });
}