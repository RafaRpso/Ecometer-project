var express = require("express");
var router = express.Router();

var funcionarioController = require("../controllers/funcionarioController");

router.post("/pegarFunc", function (req, res) {
    console.log('Cheguei na rota!')
    funcionarioController.buscarFuncionarios(req, res);
});

module.exports = router;