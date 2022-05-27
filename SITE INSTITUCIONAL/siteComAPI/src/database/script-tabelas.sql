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
    idContato INT AUTO_INCREMENT,
    fkEmpresa INT,
    numeroEmpresa CHAR(13),
    emailComercial VARCHAR(45),
    PRIMARY KEY(idContato, fkEmpresa)
);

CREATE TABLE estabelecimento(
    idEstabelecimento INT PRIMARY KEY AUTO_INCREMENT,
    nomeEstabelecimento VARCHAR(45),
    rua VARCHAR(45),
    numero INT
);

CREATE TABLE kitLixeira(
    idKitLixeira INT PRIMARY KEY AUTO_INCREMENT,
    fkEmpresa INT,
    fkEstabelecimento INT,
    coordenada VARCHAR(100),
    andar VARCHAR(2),
    FOREIGN KEY(fkEmpresa) REFERENCES empresa (idEmpresa),
    FOREIGN KEY(fkEstabelecimento) REFERENCES estabelecimento (idEstabelecimento)
);

CREATE TABLE lixeira(
idLixeira INT PRIMARY KEY AUTO_INCREMENT, 
fkKitLixeira INT,
tipoLixeira VARCHAR(20),
FOREIGN KEY(fkKitLixeira) REFERENCES kitLixeira(idKitLixeira)
);

CREATE TABLE sensor(
idSensor INT PRIMARY KEY AUTO_INCREMENT,
fkLixeira INT,
tipo varchar(25),
nivel int, 
FOREIGN KEY(fkLixeira) REFERENCES lixeira(idLixeira)
);

CREATE TABLE registro(
idRegistro INT PRIMARY KEY AUTO_INCREMENT,
fkSensor INT,
dataHoraSensor DATETIME, 
sinal int,
FOREIGN kEY (FkSensor) REFERENCES sensor (IdSensor)
);

-- inserts(NÃO APLICAR POIS AINDA NÃO ESTÃO 100% PREPARADOS)

INSERT INTO Empresa VALUES 
(null,'Ecometer','87644937541','Plano Trimestral','contato@ecometer.com','abc123'),
(null,'SoninPlay','87644937532','Plano Trimestral','contato@soninplay.com','abc123');

INSERT INTO Funcionario VALUES
(1,1,'Matheus Gomes', 'matheus.gomes@gmail.com', 'Matheus123'),
(2,2,'Kelvin Guimaraes', 'kelvin.gomes@gmail.com', 'Kelvin123'),
(3,1,'Rafael Raposo', 'rafael.raposo@gmail.com', 'Rafael123'),
(4,2,'João Gabriel', 'joao.gabriel@gmail.com', 'Joao123');

INSERT INTO Contato VALUES
(NULL, 1,'11956359201','contato@corpus.com'),
(NULL, 2,'11956359201','contato@corpus.com');

INSERT INTO Estabelecimento VALUES
(NULL, 'Shopping Morumbi Town', 'Av. Giovanni Gronchi', 5930),
(NULL, 'Shopping Plaza Town', 'Av. Rodolfo Pirani', 5931);

INSERT INTO kitLixeira VALUES 
(NULL, 1, 1, '4, 3.4', 1),
(NULL, 2, 2, '2, 1.2', 1);

INSERT INTO lixeira VALUES 
(NULL, 1, 'Plástico'),
(NULL, 1, 'Vidro'),
(NULL, 1, 'Organicos'),
(NULL, 1, 'Papel'),
(NULL, 2, 'Plástico'),
(NULL, 2, 'Vidro'),
(NULL, 2, 'Organicos'),
(NULL, 2, 'Papel');

INSERT INTO sensor VALUES 
(NULL, 1, 'TCRT5000', 1),
(NULL, 1, 'TCRT5000', 2),
(NULL, 1, 'TCRT5000', 3),
(NULL, 1, 'TCRT5000', 4),
(NULL, 2, 'TCRT5000', 1),
(NULL, 2, 'TCRT5000', 2),
(NULL, 2, 'TCRT5000', 3),
(NULL, 2, 'TCRT5000', 4),
(NULL, 3, 'TCRT5000', 1),
(NULL, 3, 'TCRT5000', 2),
(NULL, 3, 'TCRT5000', 3),
(NULL, 3, 'TCRT5000', 4),
(NULL, 4, 'TCRT5000', 1),
(NULL, 4, 'TCRT5000', 2),
(NULL, 4, 'TCRT5000', 3),
(NULL, 4, 'TCRT5000', 4),
(NULL, 5, 'TCRT5000', 1),
(NULL, 5, 'TCRT5000', 2),
(NULL, 5, 'TCRT5000', 3),
(NULL, 5, 'TCRT5000', 4),
(NULL, 6, 'TCRT5000', 1),
(NULL, 6, 'TCRT5000', 2),
(NULL, 6, 'TCRT5000', 3),
(NULL, 6, 'TCRT5000', 4),
(NULL, 7, 'TCRT5000', 1),
(NULL, 7, 'TCRT5000', 2),
(NULL, 7, 'TCRT5000', 3),
(NULL, 7, 'TCRT5000', 4),
(NULL, 8, 'TCRT5000', 1),
(NULL, 8, 'TCRT5000', 2),
(NULL, 8, 'TCRT5000', 3),
(NULL, 8, 'TCRT5000', 4);

-- Utilizar somente para testar os select --

INSERT INTO registro VALUES 
(NULL, 1, '2022-05-25 09:00:00', 1),
(NULL, 2, '2022-05-25 09:00:00', 1),
(NULL, 3, '2022-05-25 09:00:00', 1),
(NULL, 4, '2022-05-25 09:00:00', 0),
(NULL, 5, '2022-05-25 09:00:00', 1),
(NULL, 6, '2022-05-25 09:00:00', 0),
(NULL, 7, '2022-05-25 09:00:00', 0),
(NULL, 8, '2022-05-25 09:00:00', 0),
(NULL, 9, '2022-05-25 09:00:00', 1),
(NULL, 10, '2022-05-25 09:00:00', 1),
(NULL, 11, '2022-05-25 09:00:00', 0),
(NULL, 12, '2022-05-25 09:00:00', 0),
(NULL, 13, '2022-05-25 09:00:00', 1),
(NULL, 14, '2022-05-25 09:00:00', 1),
(NULL, 15, '2022-05-25 09:00:00', 1),
(NULL, 16, '2022-05-25 09:00:00', 1),
(NULL, 17, '2022-05-25 09:00:00', 1),
(NULL, 18, '2022-05-25 09:00:00', 1),
(NULL, 19, '2022-05-25 09:00:00', 1),
(NULL, 20, '2022-05-25 09:00:00', 0),
(NULL, 21, '2022-05-25 09:00:00', 1),
(NULL, 22, '2022-05-25 09:00:00', 0),
(NULL, 23, '2022-05-25 09:00:00', 0),
(NULL, 24, '2022-05-25 09:00:00', 0),
(NULL, 25, '2022-05-25 09:00:00', 1),
(NULL, 26, '2022-05-25 09:00:00', 1),
(NULL, 27, '2022-05-25 09:00:00', 0),
(NULL, 28, '2022-05-25 09:00:00', 0),
(NULL, 29, '2022-05-25 09:00:00', 1),
(NULL, 30, '2022-05-25 09:00:00', 1),
(NULL, 31, '2022-05-25 09:00:00', 1),
(NULL, 32, '2022-05-25 09:00:00', 1);

-- SELECT que mostra todos os Registros de uma determinada lixeira --
SELECT idLixeira, idSensor, nivel, dataHoraSensor, sinal FROM Lixeira, Sensor, Registro WHERE fkLixeira = idLixeira AND fkSensor = idSensor AND idLixeira = 1; 

-- SELECT que mostra todos os Registros de todas lixeiras --
SELECT idLixeira, idSensor, nivel, dataHoraSensor, sinal FROM Lixeira, Sensor, Registro WHERE fkLixeira = idLixeira AND fkSensor = idSensor;

-- SELECT que mostra todos os Registros de todas lixeiras de um Estabelecimento --
SELECT idLixeira, idSensor, nivel, dataHoraSensor, sinal, idEstabelecimento FROM Lixeira, Sensor, Registro, Estabelecimento WHERE fkLixeira = idLixeira AND fkSensor = idSensor AND idEstabelecimento = 1;

-- SELECT que mostra a Empresa e seus Funcionarios --
SELECT idEmpresa, nomeEmpresa, idFuncionario, nomeFuncionario FROM Empresa, Funcionario WHERE idEmpresa = fkEmpresa;

-- SELECT que mostra os dados da Empresa até os Registros --
SELECT idRegistro, idLixeira, dataHoraSensor, idSensor, nivel, sinal, idEmpresa, nomeEmpresa, idEstabelecimento, nomeEstabelecimento FROM Empresa, Estabelecimento, Lixeira, Sensor, Registro WHERE idLixeira = fkLixeira AND idSensor = fkSensor;

-- SELECT que mostrar os dados dos sensores de determinado Estabelecimento de determinada Empresa --
SELECT fkEmpresa, fkEstabelecimento, idKitLixeira, idLixeira, IdSensor, nivel, idRegistro, dataHoraSensor, sinal FROM kitLixeira, Lixeira, Sensor, Registro WHERE idKitLixeira = fkKitLixeira AND idLixeira = fkLixeira AND idSensor = fkSensor AND fkEmpresa = 1;

-- SELECT que mostrar as Empresas e seus Estabelecimentos --
SELECT fkEmpresa, nomeEmpresa, fkEstabelecimento, nomeEstabelecimento FROM Empresa, kitLixeira, Estabelecimento WHERE idEmpresa = fkEmpresa AND idEstabelecimento = fkEstabelecimento AND fkEmpresa = 2;

