var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(peticion, respuesta) {
  

  console.log(peticion);


  respuesta.render('index');  
});

function crear() {
  console.log("Si");    
}





module.exports = router;
