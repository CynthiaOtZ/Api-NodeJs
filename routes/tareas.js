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
        //respuesta.render('tareas', {datos: JSON.parse(datos)})
        //Parsear los datos
        
        /*var planner = JSON.parse((datos), (key,value) =>{
          console.log(value.);        
        })*/

        var planner = [];
        var USER = [];
        var TASK = [];

        planner.push(JSON.parse(datos));
    
        for (let i=0; i<planner.length;i++)
        {
          //console.log(planner[i]);
          USER.push(planner[i].USER);
          TASK.push(planner[i].TASK)
        }

        respuesta.render('tareas', {user: USER, task: TASK})
        console.log(USER);
        console.log(TASK);

    }
  })
});

module.exports = router;
