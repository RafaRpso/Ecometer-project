var database = require("../database/config");

function buscarMediaDasMedidas(idEmpresa) {
    instrucaoSql = `select tipoLixeira, dataHoraSensor, round(sum(sinal) / (select count(idkitLixeira) from kitlixeira where fkEmpresa = ${idEmpresa}), 2) as media from lixeira 
    join sensor on idLixeira = fkLixeira
    join registro on idSensor = fkSensor 
    join kitLixeira on idKitLixeira = fkKitLixeira
    where fkEmpresa = ${idEmpresa}  group by tipoLixeira;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {
    instrucaoSql = `select 
                        temperatura, 
                        umidade, DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarMediaDasMedidas,
    buscarMedidasEmTempoReal
}