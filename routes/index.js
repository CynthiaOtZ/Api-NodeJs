var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(peticion, respuesta) {
  respuesta.render('index');    
});


router.get('/:user/:date/:desc', function(peticion, respuesta) {
  alert(peticion.params.user);
});


/*Escribir despues del boton (PUG)
script.
    function crear() {
      alert('click')
    } */


module.exports = router;