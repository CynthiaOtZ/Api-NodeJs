var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(peticion, respuesta) {
  //respuesta.render('tareas');

  //LEER ARCHIVO JSON
  fs.readFile('./public/archivos/planner2023.json', (error,datos)=>{
    if (error) {
        console.log("Error en leer archivo");
        throw error;        
    } else {
        respuesta.render('tareas', {datos: JSON.parse(datos)})
    }
  })
});

module.exports = router;
