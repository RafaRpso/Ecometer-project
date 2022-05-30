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


    var idFuncionario = req.params.idFuncionario;


    funcionarioModel.deletarFuncionarios(idFuncionario).then(function (resultado) {
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
    buscarFuncionarios,
    deletarFuncionarios

}