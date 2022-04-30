create database EcoMeter;
use EcoMeter;

create table Empresa (
idEmpresa int primary key auto_increment,
nomeEmpresa varchar(45),
cnpj varchar(20),
plano varchar(20),
emailEmpresa varchar(45),
senha varchar(45)
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
    idEstabelecimento INT PRIMARY KEY auto_increment,
    nomeEstabelecimento VARCHAR(45),
    rua VARCHAR(45),
    numero INT,
    referencia VARCHAR(65)
)auto_increment = 100;

CREATE TABLE kitLixeira(
    idKitLixeira INT PRIMARY KEY,
    fkEmpresa INT,
    fkEstabelecimento int,
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
idRegistro int primary key auto_increment,
fkSensor int,
dataSensor date,
horário time,
nivel char(1),
foreign key (fkSensor) references sensor (idSensor)
);

INSERT INTO Empresa(nomeEmpresa, cnpj, plano,emailEmpresa, senha )
        VALUE('Rafael Coletas','87644937541','Plano Pro II','rafaelColetas@gmail.com','abc123');

INSERT INTO Funcionario(idFuncionario,fkEmpresa,nomeFuncionario,emailFuncionario,senhaFuncionario)
        VALUES(1,1,'Matheus Gomes', 'matheus.Gomes@gmail.com', 'Matheus123');

INSERT INTO Contato(idContato,fkEmpresa,numeroEmpresa, emailComercial)
            VALUES(1,1,'11956359201','oficialrafaelColetas@gmail.com');

INSERT INTO  estabelecimento( nomeEstabelecimento, rua, numero)
            VALUES('Shopping Morumbi Town', 'Av. Giovanni Gronchi', 5930);
