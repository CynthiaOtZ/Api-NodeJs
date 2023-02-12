const { LOADIPHLPAPI } = require('dns');
var express = require('express');
var router = express.Router();
var fs = require('fs');
let TAREAS = [];
let planner = [];
let USER;


/* GET home page. */
router.get('/', function(peticion, respuesta) {
    respuesta.render('actualizar');

  });






module.exports = router;