var database = require("../database/config");

function buscarFuncionarios(idEmpresa) {
    instrucaoSql = `select * from funcionario where fkEmpresa = ${idEmpresa}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function deletarFuncionarios(idFuncionario) {


    console.log(idFuncionario);

    instrucaoSql = `delete from funcionario where idFuncionario = ${idFuncionario}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listar() {
    console.log("ACESSEI O Funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM Funcionario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrarFunc(email, senha) {
    console.log("ACESSEI O Funcionario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM Funcionario WHERE emailFuncionario = '${email}' AND senhaFuncionario = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    buscarFuncionarios,
    deletarFuncionarios,
    listar,
    entrarFunc,
}