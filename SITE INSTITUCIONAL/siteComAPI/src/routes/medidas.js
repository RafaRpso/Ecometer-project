var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");
 
router.get("/ultimas/:idEmpresa", function (req, res) {
    medidaController.buscarMediaDasMedidas(req, res);
});

router.get("/tempo-real/:idEmpresa", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;