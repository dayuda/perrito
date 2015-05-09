// Dependencias
var express = require("express");
var aplicacion = express();
// Dependencias

// Acciones cuando esta en al raiz
var home = function (req, res) { res.sendfile(__dirname + "/vista/"); };
var magicform = function (req, res) { res.sendfile(__dirname + "/vista/js/framework/magicform.js"); };
// Acciones cuando esta en al raiz

// Página iniciar

aplicacion.get("/", home);
aplicacion.get("/magicform", magicform);




var server = aplicacion.listen(8000);


