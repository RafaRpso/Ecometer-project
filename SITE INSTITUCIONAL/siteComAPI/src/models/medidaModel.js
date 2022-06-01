var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {
    instrucaoSql = `SELECT idLixeira, count(idLixeira)
    FROM kitLixeira, lixeira, sensor, registro 
    WHERE idKitLixeira = fkKitLixeira AND idLixeira = fkLixeira 
    AND idSensor = fkSensor AND sinal = '1' AND idKitLixeira = ${idAquario}
    GROUP BY idLixeira;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
buscarMedidasEmTempoReal(1)
function buscarMedidasEmTempoReal(idEmpresa) {
    instrucaoSql = `SELECT idLixeira, idKitLixeira,  tipoLixeira, idSensor, sum(sinal) as nivel, idRegistro, dataHoraSensor FROM kitLixeira, lixeira, sensor, registro , Empresa WHERE idKitLixeira = fkKitLixeira AND idLixeira = fkLixeira AND idSensor = fkSensor AND tipoLixeira = 'Plastico' AND idEmpresa = ${idEmpresa} AND idKitLixeira = 1 AND dataHoraSensor = (SELECT max(dataHoraSensor) FROM registro ORDER BY dataHoraSensor DESC);
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarMedidasEmTempoReal
}