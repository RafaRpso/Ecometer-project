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
tipo varchar(15),
descricao varchar(45), 
FOREIGN KEY(fkLixeira) REFERENCES lixeira(idLixeira)
);

CREATE TABLE registro(
idRegistro INT PRIMARY KEY AUTO_INCREMENT,
fkSensor INT,
dataSensor DATE,
horário TIME,
nivel int,
FOREIGN kEY (FkSensor) REFERENCES sensor (IdSensor)
);

--inserts(NÃO APLICAR POIS AINDA NÃO ESTÃO 100% PREPARADOS)

insert into kitLixeira values (null, 1, 1, '4,3.4', 1, null),
(null, 1, 1, '6,6.9', 2, null),
(null, 1, 1, '4,2.5', 3, null);

--insert da tabela sensor

insert into sensor values
(1, null, 'DRT5000', 'Sensor de bloqueio'),
(1, null, 'DRT5000', 'Sensor de bloqueio'),
(1, null, 'DRT5000', 'Sensor de bloqueio'),
(1, null, 'DRT5000', 'Sensor de bloqueio'),
(2, null, 'DRT5000', 'Sensor de bloqueio'),
(2, null, 'DRT5000', 'Sensor de bloqueio'),
(2, null, 'DRT5000', 'Sensor de bloqueio'),
(2, null, 'DRT5000', 'Sensor de bloqueio'),
(3, null, 'DRT5000', 'Sensor de bloqueio'),
(3, null, 'DRT5000', 'Sensor de bloqueio'),
(3, null, 'DRT5000', 'Sensor de bloqueio'),
(3, null, 'DRT5000', 'Sensor de bloqueio'),
(4, null, 'DRT5000', 'Sensor de bloqueio'),
(4, null, 'DRT5000', 'Sensor de bloqueio'),
(4, null, 'DRT5000', 'Sensor de bloqueio'),
(4, null, 'DRT5000', 'Sensor de bloqueio');

--obs: pq os tipos de lixeira estão setados como char(1) sendo que temos que escrever quais serão os kits
insert into lixeira values (null, 1, 'Plástico'),
(null, 1, 'Papel'),
(null, 1, 'Metal'),
(null, 1, 'Vidro'),
(null, 2, 'Plástico'),
(null, 2, 'Papel'),
(null, 2, 'Metal'),
(null, 2, 'Vidro'),
(null, 3, 'Plástico'),
(null, 3, 'Papel'),
(null, 3, 'Metal'),
(null, 3, 'Vidro');

insert into registro values (null, 1, '2022-05-03', 12:00, 1),
(null, 1, '2022-05-03', 13:00, 1),
(null, 1, '2022-05-03', 14:00, 1),
(null, 2, '2022-05-03', 15:00, 2),
(null, 2, '2022-05-03', 16:00, 2),
(null, 2 '2022-05-03', 17:00, 2),
(null, 2, '2022-05-03', 18:00, 2),
(null, 3, '2022-05-03', 19:00, 3),
(null, 3, '2022-05-03', 20:00, 3),
(null, 3, '2022-05-03', 21:00, 3),
(null, 4, '2022-05-03', 22:00, 4),
--lixeira 2 kit 1
(null, 5, '2022-05-03', 13:00, 1),
(null, 5, '2022-05-03', 14:00, 1),
(null, 5, '2022-05-03', 15:00, 1),
(null, 6, '2022-05-03', 16:00, 2),
(null, 6, '2022-05-03', 17:00, 2),
(null, 6, '2022-05-03', 18:00, 2),
(null, 6, '2022-05-03', 19:00, 2),
(null, 7, '2022-05-03', 20:00, 3),
(null, 7, '2022-05-03', 21:00, 3),
(null, 8, '2022-05-03', 22:00, 4),
--lixeira 3 kit 1
(null, 9, '2022-05-03', 14:00, 1),
(null, 9, '2022-05-03', 15:00, 1),
(null, 9, '2022-05-03', 16:00, 1),
(null, 9, '2022-05-03', 17:00, 1),
(null, 9, '2022-05-03', 18:00, 1),
(null, 10, '2022-05-03', 19:00, 2),
(null, 10, '2022-05-03', 20:00, 2),
(null, 10, '2022-05-03', 21:00, 2),
(null, 11, '2022-05-03', 22:00, 3),
--lixeira 4 kit 1
(null, 12, '2022-05-03', 19:00, 1),
(null, 12, '2022-05-03', 20:00, 1),
(null, 12, '2022-05-03', 21:00, 1),
(null, 12, '2022-05-03', 22:00, 1);







 



 

