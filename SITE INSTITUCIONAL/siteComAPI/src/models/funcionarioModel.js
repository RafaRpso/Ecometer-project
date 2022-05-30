var database = require("../database/config");

function buscarFuncionarios(idEmpresa) {
    instrucaoSql = `select * from funcionario where fkEmpresa = ${idEmpresa}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function deletarFuncionarios(idFuncionario) {
    instrucaoSql = `delete from funcionario where idFuncionario = ${idFuncionario}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    buscarFuncionarios,
    deletarFuncionarios
}