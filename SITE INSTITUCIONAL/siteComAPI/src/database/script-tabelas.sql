-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para workbench - local - desenvolvimento */
CREATE DATABASE ecometer;
USE ecometer;

CREATE TABLE Empresa (
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
nomeEmpresa VARCHAR(45),
cnpj VARCHAR(20),
plano VARCHAR(20),
emailEmpresa VARCHAR(45),
senha VARCHAR(45)
);

CREATE TABLE Funcionario(
    idFuncionario INT,
    fkEmpresa INT,
    FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa),
    nomeFuncionario VARCHAR(45),
    emailFuncionario VARCHAR(45),
    senhaFuncionario VARCHAR(45),
    PRIMARY KEY(idFuncionario, fkEmpresa)
);

CREATE TABLE Contato(
    idContato INT,
    fkEmpresa INT,
    numeroEmpresa CHAR(13),
    emailComercial VARCHAR(45),
    PRIMARY KEY(idContato, fkEmpresa)
);

CREATE TABLE estabelecimento(
    idEstabelecimento INT PRIMARY KEY AUTO_INCREMENT,
    nomeEstabelecimento VARCHAR(45),
    rua VARCHAR(45),
    andar VARCHAR(2),
    numero INT,
    referencia VARCHAR(65)
)AUTO_INCREMENT = 100;

CREATE TABLE kitLixeira(
    idKitLixeira INT PRIMARY KEY,
    fkEmpresa INT,
    fkEstabelecimento INT,
    coordenada VARCHAR(100),
    andar VARCHAR(2),
    referencia VARCHAR(65),
    FOREIGN KEY(fkEmpresa) REFERENCES empresa (idEmpresa),
    FOREIGN KEY(fkEstabelecimento) REFERENCES estabelecimento (idEstabelecimento)
);

CREATE TABLE lixeira(
idLixeira INT PRIMARY KEY, 
fkKitLixeira INT,
tipoLixeira CHAR(1),
FOREIGN KEY(fkKitLixeira) REFERENCES kitLixeira(idKitLixeira)
);

CREATE TABLE sensor(
fkLixeira INT,
idSensor INT PRIMARY KEY AUTO_INCREMENT,
dataSensor DATE,
nivel CHAR(1), 
FOREIGN KEY(fkLixeira) REFERENCES lixeira(idLixeira)
);

CREATE TABLE registro(
idRegistro INT PRIMARY KEY AUTO_INCREMENT,
fkSensor INT,
dataSensor DATE,
horário TIME,
nivel cHAR(1),
FOREIGN kEY (FkSensor) REFERENCES sensor (IdSensor)
);