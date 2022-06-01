var medidaModel = require("../models/medidaModel");
var dadosInRealTime = 0 ; 

function buscarMedidasEmTempoReal(req, res) {

    var idEmpresa = req.params.idEmpresa;
    dadosInRealTime = resultado ; 
    console.log(`Recuperando medidas em tempo real`);
  
    medidaModel.buscarMedidasEmTempoReal(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            
            
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
   
}

module.exports = {
    buscarMedidasEmTempoReal

}