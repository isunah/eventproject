var express = require("express");
var app = express();
var mysql = require("mysql");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

app.use(express.static("public"));
app.use(cookieParser());

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

var conexion = mysql.createConnection({
	user:"siintech_is",
	host:"siintechn.com",
	password:"gwE(,ew$)@LF",
	database:"siintech_eventos"
});

conexion.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + conexion.threadId);
});

app.listen(3000);
