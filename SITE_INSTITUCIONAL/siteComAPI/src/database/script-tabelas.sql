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
idFuncionario INT AUTO_INCREMENT,
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
sinal int,
fkSensor INT,
dataHoraSensor DATETIME,
FOREIGN kEY (FkSensor) REFERENCES sensor (IdSensor)
);

-- inserts(NÃO APLICAR POIS AINDA NÃO ESTÃO 100% PREPARADOS)

INSERT INTO Empresa VALUES
('Ecometer','87644937541','Plano Trimestral','contato@ecometer.com','abc123'),
('SoninPlay','87644937532','Plano Trimestral','contato@soninplay.com','abc123');

INSERT INTO Funcionario VALUES
(1,1,'Matheus Gomes', 'matheus.gomes@gmail.com', 'Matheus123'),
(2,2,'Kelvin Guimaraes', 'kelvin.gomes@gmail.com', 'Kelvin123'),
(3,1,'Rafael Raposo', 'rafael.raposo@gmail.com', 'Rafael123'),
(4,2,'João Gabriel', 'joao.gabriel@gmail.com', 'Joao123');

INSERT INTO Contato VALUES
( 1,'11956359201','contato@corpus.com'),
( 2,'11956359201','contato@corpus.com');

INSERT INTO Estabelecimento VALUES
( 'Shopping Morumbi Town', 'Av. Giovanni Gronchi', 5930),
( 'Shopping Plaza Town', 'Av. Rodolfo Pirani', 5931);

INSERT INTO kitLixeira VALUES
( 1, 1, '4, 3.4', 1),
( 1, 1, '2, 1.2', 1),
( 1, 1, '4, 4.8', 1);

INSERT INTO lixeira VALUES
( 1, 'Plástico'),
( 1, 'Vidro'),
( 1, 'Metal'),
( 1, 'Papel'),
( 2, 'Plástico'),
( 2, 'Vidro'),
( 2, 'Metal'),
( 2, 'Papel'),
( 3, 'Plástico'),
( 3, 'Vidro'),
( 3, 'Metal'),
( 3, 'Papel');


INSERT INTO sensor VALUES
( 1, 'TCRT5000', 1),
( 1, 'TCRT5000', 2),
( 1, 'TCRT5000', 3),
( 1, 'TCRT5000', 4),
( 2, 'TCRT5000', 1),
( 2, 'TCRT5000', 2),
( 2, 'TCRT5000', 3),
( 2, 'TCRT5000', 4),
( 3, 'TCRT5000', 1),
( 3, 'TCRT5000', 2),
( 3, 'TCRT5000', 3),
( 3, 'TCRT5000', 4),
( 4, 'TCRT5000', 1),
( 4, 'TCRT5000', 2),
( 4, 'TCRT5000', 3),
( 4, 'TCRT5000', 4),
( 5, 'TCRT5000', 1),
( 5, 'TCRT5000', 2),
( 5, 'TCRT5000', 3),
( 5, 'TCRT5000', 4),
( 6, 'TCRT5000', 1),
( 6, 'TCRT5000', 2),
( 6, 'TCRT5000', 3),
( 6, 'TCRT5000', 4),
( 7, 'TCRT5000', 1),
( 7, 'TCRT5000', 2),
( 7, 'TCRT5000', 3),
( 7, 'TCRT5000', 4),
( 8, 'TCRT5000', 1),
( 8, 'TCRT5000', 2),
( 8, 'TCRT5000', 3),
( 8, 'TCRT5000', 4),
( 9, 'TCRT5000', 1),
( 9, 'TCRT5000', 2),
( 9, 'TCRT5000', 3),
( 9, 'TCRT5000', 4),
( 10, 'TCRT5000', 1),
( 10, 'TCRT5000', 2),
( 10, 'TCRT5000', 3),
( 10, 'TCRT5000', 4),
( 11, 'TCRT5000', 1),
( 11, 'TCRT5000', 2),
( 11, 'TCRT5000', 3),
( 11, 'TCRT5000', 4),
( 12, 'TCRT5000', 1),
( 12, 'TCRT5000', 2),
( 12, 'TCRT5000', 3),
( 12, 'TCRT5000', 4);


INSERT INTO registro (idRegistro, fkSensor, dataHoraSensor, sinal)
VALUES( 1, '2022-05-25 09:30:00', 1),
( 2, '2022-05-25 09:00:00', 1),
( 3, '2022-05-25 09:00:00', 1),
( 4, '2022-05-25 09:00:00', 0),
( 5, '2022-05-25 09:00:00', 1),
( 6, '2022-05-25 09:00:00', 0),
( 7, '2022-05-25 09:00:00', 0),
( 8, '2022-05-25 09:00:00', 0),
( 9, '2022-05-25 09:00:00', 1),
( 10, '2022-05-25 09:00:00', 1),
( 11, '2022-05-25 09:00:00', 0),
( 12, '2022-05-25 09:00:00', 0),
( 13, '2022-05-25 09:00:00', 1),
( 14, '2022-05-25 09:00:00', 1),
( 15, '2022-05-25 09:00:00', 1),
( 16, '2022-05-25 09:00:00', 1);

-- SELECT que mostra todos os Registros de uma determinada lixeira --
SELECT idLixeira, idSensor, nivel, dataHoraSensor, sinal FROM Lixeira, Sensor, Registro WHERE fkLixeira = idLixeira AND
fkSensor = idSensor AND idLixeira = 1;

-- SELECT que mostra todos os Registros de todas lixeiras --
SELECT idLixeira, idSensor, nivel, dataHoraSensor, sinal FROM Lixeira, Sensor, Registro WHERE fkLixeira = idLixeira AND
fkSensor = idSensor;

-- SELECT que mostra todos os Registros de todas lixeiras de um Estabelecimento --
SELECT idLixeira, idSensor, nivel, dataHoraSensor, sinal, idEstabelecimento FROM Lixeira, Sensor, Registro,
Estabelecimento WHERE fkLixeira = idLixeira AND fkSensor = idSensor AND idEstabelecimento = 1;

-- SELECT que mostra a Empresa e seus Funcionarios --
SELECT idEmpresa, nomeEmpresa, idFuncionario, nomeFuncionario FROM Empresa, Funcionario WHERE idEmpresa = fkEmpresa;

-- SELECT que mostra os dados da Empresa até os Registros --
SELECT idRegistro, idLixeira, dataHoraSensor, idSensor, nivel, sinal, idEmpresa, nomeEmpresa, idEstabelecimento,
nomeEstabelecimento FROM Empresa, Estabelecimento, Lixeira, Sensor, Registro WHERE idLixeira = fkLixeira AND idSensor =
fkSensor;

-- SELECT que mostrar os dados dos sensores de determinado Estabelecimento de determinada Empresa --
SELECT fkEmpresa, fkEstabelecimento, idKitLixeira, idLixeira, IdSensor, nivel, idRegistro, dataHoraSensor, sinal FROM
kitLixeira, Lixeira, Sensor, Registro WHERE idKitLixeira = fkKitLixeira AND idLixeira = fkLixeira AND idSensor =
fkSensor AND fkEmpresa = 1;

-- SELECT que mostrar as Empresas e seus Estabelecimentos --
SELECT fkEmpresa, nomeEmpresa, fkEstabelecimento, nomeEstabelecimento FROM Empresa, kitLixeira, Estabelecimento WHERE
idEmpresa = fkEmpresa AND idEstabelecimento = fkEstabelecimento AND fkEmpresa = 2;

-- SELECT que mostrar todos os registros que deram sinal = 1 de todas as lixeiras em ordem desc --
SELECT idLixeira, idKitLixeira, tipoLixeira, idSensor, nivel, idRegistro, dataHoraSensor, sinal FROM kitLixeira,
lixeira, sensor, registro WHERE idKitLixeira = fkKitLixeira AND idLixeira = fkLixeira AND idSensor = fkSensor AND sinal
= '1' ORDER BY NIVEL DESC;

-- SELECT que mostra os ultimos dados de uma lixeira especifica em ordem desc --
SELECT idLixeira, idKitLixeira, tipoLixeira, idSensor, nivel, idRegistro, dataHoraSensor, sinal FROM kitLixeira,
lixeira, sensor, registro WHERE idKitLixeira = fkKitLixeira AND idLixeira = fkLixeira AND idSensor = fkSensor AND sinal
= '1' AND idLixeira = 1 ORDER BY NIVEL DESC;

-- SELECT que mostra o ultimo dado de uma lixeira especifica em ordem desc e limitado em 1 --
SELECT idLixeira, idKitLixeira, tipoLixeira, idSensor, nivel, idRegistro, dataHoraSensor, sinal FROM kitLixeira,
lixeira, sensor, registro WHERE idKitLixeira = fkKitLixeira AND idLixeira = fkLixeira AND idSensor = fkSensor AND sinal
= '1' AND idLixeira = 1 ORDER BY NIVEL DESC LIMIT 1;

-- SELECT que conta os registros que deram sinal = 1 de uma determinada lixeira --
SELECT count(idLixeira) FROM kitLixeira, lixeira, sensor, registro WHERE idKitLixeira = fkKitLixeira AND idLixeira =
fkLixeira AND idSensor = fkSensor AND sinal = '1' AND idLixeira = (1);

-- ESSES SÃO OS MAIS IMPORTANTES ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ ⇩ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! --

-- SELECT que conta os registros que deram sinal = 1 de todas as lixeiras de um determinado kit --
SELECT idLixeira, count(idLixeira) AS 'Nivel' FROM kitLixeira, lixeira, sensor, registro WHERE idKitLixeira =
fkKitLixeira AND idLixeira = fkLixeira AND idSensor = fkSensor AND sinal = '1' AND idKitLixeira = '1' GROUP BY
idLixeira;

-- SELECT PARA PEGAR A MÉDIA DE TODAS AS LIXEIRAS DE UM DETERMINADO KIT--
select tipoLixeira, dataHoraSensor, round(sum(sinal) / (select count(idLixeira) from lixeira where tipoLixeira =
'Plástico'), 2) from Empresa join kitLixeira on idEmpresa = fkEmpresa join lixeira join sensor on idLixeira = fkLixeira
join registro on idSensor = fkSensor where tipoLixeira = 'Plástico' group by tipoLixeira;

-- SELECT para mostrar a soma de todos sinais de uma lixeira especifica de um determinado kit na ultima hora --
-- PLASTICO --
SELECT idLixeira, idKitLixeira, tipoLixeira, idSensor, sum(sinal) as nivel, idRegistro, dataHoraSensor FROM kitLixeira,
lixeira, sensor, registro WHERE idKitLixeira = fkKitLixeira AND idLixeira = fkLixeira AND idSensor = fkSensor AND
tipoLixeira = 'Plastico' AND idKitLixeira = 1 AND dataHoraSensor = (SELECT max(dataHoraSensor) FROM registro ORDER BY
dataHoraSensor DESC);
-- VIDRO --
SELECT idLixeira, idKitLixeira, tipoLixeira, idSensor, sum(sinal) as nivel, idRegistro, dataHoraSensor FROM kitLixeira,
lixeira, sensor, registro WHERE idKitLixeira = fkKitLixeira AND idLixeira = fkLixeira AND idSensor = fkSensor AND
tipoLixeira = 'Vidro' AND idKitLixeira = 1 AND dataHoraSensor = (SELECT max(dataHoraSensor) FROM registro ORDER BY
dataHoraSensor DESC);
-- METAL --
SELECT idLixeira, idKitLixeira, tipoLixeira, idSensor, sum(sinal) as nivel, idRegistro, dataHoraSensor FROM kitLixeira,
lixeira, sensor, registro WHERE idKitLixeira = fkKitLixeira AND idLixeira = fkLixeira AND idSensor = fkSensor AND
tipoLixeira = 'Metal' AND idKitLixeira = 1 AND dataHoraSensor = (SELECT max(dataHoraSensor) FROM registro ORDER BY
dataHoraSensor DESC);
-- PAPEL --
SELECT idLixeira, idKitLixeira, tipoLixeira, idSensor, sum(sinal) as nivel, idRegistro, dataHoraSensor FROM kitLixeira,
lixeira, sensor, registro WHERE idKitLixeira = fkKitLixeira AND idLixeira = fkLixeira AND idSensor = fkSensor AND
tipoLixeira = 'Papel' AND idKitLixeira = 1 AND dataHoraSensor = (SELECT max(dataHoraSensor) FROM registro ORDER BY
dataHoraSensor DESC);

-- SELECT para mostrar o historico

SELECT idLixeira, idKitLixeira, tipoLixeira, idSensor, sum(sinal) as nivel, idRegistro, dataHoraSensor
FROM kitLixeira, lixeira, sensor, registro
WHERE idKitLixeira = fkKitLixeira
AND idLixeira = fkLixeira
AND idSensor = fkSensor
AND tipoLixeira = 'Plástico'
AND idKitLixeira = 1
group by datahorasensor;
SELECT * FROM empresa;


-- BANCO PARA AZURE

CREATE TABLE Empresa (
idEmpresa INT PRIMARY KEY IDENTITY (1 , 1),
nomeEmpresa VARCHAR(45),
cnpj VARCHAR(20),
plano VARCHAR(20),
emailEmpresa VARCHAR(45),
senha VARCHAR(45)
);

CREATE TABLE Funcionario(
idFuncionario INT IDENTITY (1 , 1),
fkEmpresa INT FOREIGN KEY REFERENCES empresa(idEmpresa),
nomeFuncionario VARCHAR(45),
emailFuncionario VARCHAR(45),
senhaFuncionario VARCHAR(45),
PRIMARY KEY(idFuncionario, fkEmpresa)
);

CREATE TABLE Contato(
idContato INT IDENTITY (1 , 1),
fkEmpresa INT,
numeroEmpresa CHAR(13),
emailComercial VARCHAR(45),
PRIMARY KEY(idContato, fkEmpresa)
);

CREATE TABLE estabelecimento(
idEstabelecimento INT PRIMARY KEY IDENTITY (1 , 1),
nomeEstabelecimento VARCHAR(45),
rua VARCHAR(45),
numero INT
);

CREATE TABLE kitLixeira(
idKitLixeira INT PRIMARY KEY IDENTITY (1 , 1),
fkEmpresa INT FOREIGN KEY REFERENCES empresa (idEmpresa),
fkEstabelecimento INT FOREIGN KEY REFERENCES estabelecimento(idEstabelecimento),
coordenada VARCHAR(100),
andar VARCHAR(2)

);

CREATE TABLE lixeira(
idLixeira INT PRIMARY KEY IDENTITY (1 , 1),
fkKitLixeira INT FOREIGN KEY REFERENCES kitLixeira(idKitLixeira),
tipoLixeira VARCHAR(20),

);

CREATE TABLE sensor(
idSensor INT PRIMARY KEY IDENTITY (1 , 1),
fkLixeira INT FOREIGN KEY REFERENCES lixeira(idLixeira),
tipo varchar(25),
nivel int,

);

CREATE TABLE registro(
idRegistro INT PRIMARY KEY IDENTITY (0 , 1),
sinal int,
fkSensor INT FOREIGN kEY REFERENCES sensor (IdSensor),
dataHoraSensor DATETIME,

);

-- inserts(NÃO APLICAR POIS AINDA NÃO ESTÃO 100% PREPARADOS)


INSERT INTO Empresa(nomeEmpresa, cnpj, plano, emailEmpresa, senha) VALUES
('Ecometer','87644937541','Plano Trimestral','contato@ecometer.com','abc123'),
('SoninPlay','87644937532','Plano Trimestral','contato@soninplay.com','abc123');


INSERT INTO Funcionario(fkEmpresa, nomeFuncionario, emailFuncionario, senhaFuncionario) VALUES
(1,'Matheus Gomes', 'matheus.gomes@gmail.com', 'Matheus123'),
(2,'Kelvin Guimaraes', 'kelvin.gomes@gmail.com', 'Kelvin123'),
(1,'Rafael Raposo', 'rafael.raposo@gmail.com', 'Rafael123'),
(2,'João Gabriel', 'joao.gabriel@gmail.com', 'Joao123');


INSERT INTO Contato(fkEmpresa, numeroEmpresa, emailComercial) VALUES
(1,'11956359201','contato@corpus.com'),
(2,'11956359201','contato@corpus.com');


INSERT INTO Estabelecimento VALUES
('Shopping Morumbi Town', 'Av. Giovanni Gronchi', 5930),
('Shopping Plaza Town', 'Av. Rodolfo Pirani', 5931);

INSERT INTO kitLixeira VALUES
( 1, 1, '4, 3.4', 1),
( 1, 1, '2, 1.2', 1),
( 1, 1, '4, 4.8', 1);

INSERT INTO lixeira VALUES
(1, 'Plástico'),
(1, 'Vidro'),
(1, 'Metal'),
(1, 'Papel'),
( 2, 'Plástico'),
(2, 'Vidro'),
( 2, 'Metal'),
(2, 'Papel'),
(3, 'Plástico'),
(3, 'Vidro'),
(3, 'Metal'),
(3, 'Papel');


INSERT INTO sensor VALUES
( 1, 'TCRT5000', 1),
( 1, 'TCRT5000', 2),
( 1, 'TCRT5000', 3),
( 1, 'TCRT5000', 4),
( 2, 'TCRT5000', 1),
( 2, 'TCRT5000', 2),
( 2, 'TCRT5000', 3),
( 2, 'TCRT5000', 4),
( 3, 'TCRT5000', 1),
( 3, 'TCRT5000', 2),
( 3, 'TCRT5000', 3),
( 3, 'TCRT5000', 4),
( 4, 'TCRT5000', 1),
( 4, 'TCRT5000', 2),
( 4, 'TCRT5000', 3),
( 4, 'TCRT5000', 4),
( 5, 'TCRT5000', 1),
( 5, 'TCRT5000', 2),
( 5, 'TCRT5000', 3),
( 5, 'TCRT5000', 4),
( 6, 'TCRT5000', 1),
( 6, 'TCRT5000', 2),
( 6, 'TCRT5000', 3),
( 6, 'TCRT5000', 4),
( 7, 'TCRT5000', 1),
( 7, 'TCRT5000', 2),
( 7, 'TCRT5000', 3),
( 7, 'TCRT5000', 4),
( 8, 'TCRT5000', 1),
( 8, 'TCRT5000', 2),
( 8, 'TCRT5000', 3),
( 8, 'TCRT5000', 4),
( 9, 'TCRT5000', 1),
( 9, 'TCRT5000', 2),
( 9, 'TCRT5000', 3),
( 9, 'TCRT5000', 4),
( 10, 'TCRT5000', 1),
( 10, 'TCRT5000', 2),
( 10, 'TCRT5000', 3),
( 10, 'TCRT5000', 4),
( 11, 'TCRT5000', 1),
( 11, 'TCRT5000', 2),
( 11, 'TCRT5000', 3),
( 11, 'TCRT5000', 4),
( 12, 'TCRT5000', 1),
( 12, 'TCRT5000', 2),
( 12, 'TCRT5000', 3),
( 12, 'TCRT5000', 4);