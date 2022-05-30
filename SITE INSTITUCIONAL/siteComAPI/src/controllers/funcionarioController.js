var funcionarioModel = require("../models/funcionarioModel");

function buscarFuncionarios(req, res) {


    var idEmpresa = req.body.idEmpresa;


    funcionarioModel.buscarFuncionarios(idEmpresa).then(function (resultado) {
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

function deletarFuncionarios(req, res) {
    console.log('Cheguei no controller')    

    var idFuncionario = req.body.idFuncionario;
    

    funcionarioModel.deletarFuncionarios(idFuncionario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
            console.log(`${idFuncionario}`)
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
            console.log(`${idFuncionario}`)
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        console.log(idFuncionario)
        res.status(500).json(erro.sqlMessage);
        
    });
}






module.exports = {
    buscarFuncionarios,
    deletarFuncionarios

}