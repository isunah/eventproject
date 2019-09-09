const express = require("express");
const app = express();
const usuarioController = require("../controllers/usuariosController.js")

app.post("/usuarios/register",usuarioController.register)
app.post("/usuarios/login",usuarioController.login)

module.exports = app;