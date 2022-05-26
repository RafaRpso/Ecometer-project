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

INSERT INTO Empresa(nomeEmpresa, cnpj, plano,emailEmpresa, senha )
        VALUE('Corpus','87644937541','Plano Trimestral','contato@corpus.com','abc123');

INSERT INTO Funcionario(idFuncionario,fkEmpresa,nomeFuncionario,emailFuncionario,senhaFuncionario)
        VALUES(1,1,'Matheus Gomes', 'matheus.gomes@gmail.com', 'Matheus123');

INSERT INTO Contato(idContato,fkEmpresa,numeroEmpresa, emailComercial)
            VALUES(1,1,'11956359201','contato@corpus.com');

INSERT INTO  estabelecimento( nomeEstabelecimento, rua, numero)
            VALUES('Shopping Morumbi Town', 'Av. Giovanni Gronchi', 5930);

INSERT INTO kitLixeira(idKitLixeira, fkEmpresa, fkEstabelecimento, coordenada, andar) VALUES 
(1, 1, 1, '4, 3.4', 1),
(2, 1, 1, '6, 6.9', 2),
(3, 1, 1, '4, 2.5', 1);

INSERT INTO lixeira(idLixeira, fkKitLixeira, tipoLixeira) VALUES 
(1, 1, Plástico),
(2, 1, Vidro),
(3, 1, Organicos),
(4, 1, Papel);


INSERT INTO sensor(idSensor, fkLixeira, tipo, nivel) VALUES 
(1, 1, 'TCRT5000', 1),
(2, 1, 'TCRT5000', 2),
(3, 1, 'TCRT5000', 3),
(4, 1, 'TCRT5000', 4),
(5, 2, 'TCRT5000', 1),
(6, 2, 'TCRT5000', 2),
(7, 2, 'TCRT5000', 3),
(8, 2, 'TCRT5000', 4),
(9, 3, 'TCRT5000', 1),
(10, 3, 'TCRT5000', 2),
(11, 3, 'TCRT5000', 3),
(12, 3, 'TCRT5000', 4),
(13, 4, 'TCRT5000', 1),
(14, 4, 'TCRT5000', 2),
(15, 4, 'TCRT5000', 3),
(16, 4, 'TCRT5000', 4);

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
(NULL, 16, '2022-05-25 09:00:00', 1);


