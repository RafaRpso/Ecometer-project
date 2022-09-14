var express = require("express");
var router = express.Router();

var funcionarioController = require("../controllers/funcionarioController");

router.post("/pegarFunc", function (req, res) {
    console.log('Cheguei na rota!')
    funcionarioController.buscarFuncionarios(req, res);
});

router.post("/deleteFunc", function (req, res) {
    console.log('Cheguei na rota do delete!')
    funcionarioController.deletarFuncionarios(req, res);
    
});

router.post("/autenticarF", function (req, res) {
    funcionarioController.entrarFuncionario(req, res);
});


module.exports = router;