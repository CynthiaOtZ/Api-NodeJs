const { LOADIPHLPAPI } = require('dns');
var express = require('express');
var router = express.Router();
var fs = require('fs');
let TAREAS = [];
let planner = [];
let USER;


/* GET home page. */
router.get('/', function(peticion, respuesta) {
    //respuesta.render('eliminar');
    
    planner = [];
    var idTarea = 0;

    //Obtener datos del archivo JSON
    fs.readFile('./public/archivos/planner2023.json', (error,datos)=>{
        if (error) {
            console.log("Error en leer archivo");
            throw error;        
            } else {       
            planner.push(JSON.parse(datos));
        
            for (let i=0; i<planner.length;i++)
            {
                TAREAS.push(planner[i].TASK)
                //console.log(TAREAS[0]);
                USER = planner[i].USER.id;
            } 
            respuesta.render('eliminar', {task: TAREAS[0]})
            //plannerString = JSON.stringify(planner[0]);
        }
  })


  });


  router.post('/', function(peticion, respuesta) {

    let idTarea = peticion.body.desc;
    let TASK = [];
    let plannerString;

    let index = TAREAS[0].findIndex(obj => obj.id==idTarea.toString());
    TAREAS[0].splice(index,1);
    
    plannerString = JSON.stringify(planner[0]);

    console.log("Aqui");
    console.log(plannerString);

    //Sobre-Escribir archivos con modulo FS (si no encuentra el archivo, lo va a crear)
    fs.writeFile('./public/archivos/planner2023.json', plannerString, (error)=>{
      if(error)
      {
        console.log("ERROR");
        throw error;
      }
      else 
      {
        console.log("Archivo modificado exitosamente");
        //Debemos llamar la ruta de /tareas
        respuesta.redirect('/tareas/'+ USER);
      }
    });


    
  });

module.exports = router;