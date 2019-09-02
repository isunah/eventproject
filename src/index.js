const express = require("express");
const app = express();
const connection = require("./config/dbConnection")
//const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(cookieParser());

app.use(express.json()); 
app.use(express.urlencoded({extended:true}));

const conexion = connection();

conexion.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + conexion.threadId);
});

app.listen(3000);
