var database = require("../database/config");

function buscarMedidasKit(idAquario) {
    instrucaoSql = `
    SELECT idLixeira, idKitLixeira, tipoLixeira, idSensor, sum(sinal) as nivel, idRegistro,  DATE_FORMAT(dataHoraSensor,'%H:%i:%s') as momento_grafico
    FROM kitLixeira, lixeira, sensor, registro  
    WHERE idKitLixeira = fkKitLixeira 
    AND idLixeira = fkLixeira 
    AND idSensor = fkSensor 
    AND tipoLixeira = 'Plástico' 
    AND idKitLixeira = 1
    group by datahorasensor;

`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    instrucaoSql = '';

    instrucaoSql = `SELECT idLixeira, idKitLixeira,  tipoLixeira, idSensor, sum(sinal) as nivel, idRegistro, DATE_FORMAT(dataHoraSensor,'%H:%i:%s') as momento_grafico FROM kitLixeira, lixeira, sensor, registro , Empresa WHERE idKitLixeira = fkKitLixeira AND idLixeira = fkLixeira AND idSensor = fkSensor AND tipoLixeira = 'Plastico' AND idEmpresa = ${idAquario} AND idKitLixeira = 1 AND dataHoraSensor = (SELECT max(dataHoraSensor) FROM registro ORDER BY dataHoraSensor DESC)`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarMedidasEmTempoReal,
    buscarMedidasKit
}