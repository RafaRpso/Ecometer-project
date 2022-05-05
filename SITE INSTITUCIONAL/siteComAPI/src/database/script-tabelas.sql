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
dataSensor DATETIME, 
nivel int,
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