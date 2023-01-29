var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(peticion, respuesta) {
    //respuesta.render('eliminar');
    
    let planner = [];
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
                if(planner[i].TASK.length >= 0)
                {
                    var limite = planner[i].TASK.length - 1;
                    idTarea = parseInt(planner[i].TASK[limite].id) + 1;
                                       
                }
            } 
            //respuesta.render('tareas', {user: USER, task: TASK})
            plannerString = JSON.stringify(planner[0]);

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
        }
  })










  });
module.exports = router;