-- Criando o banco EcoTech
CREATE DATABASE EcoTech;

-- Selecionando o banco EcoTech
USE EcoTech;

-- Criando a tabela EnderecoEmpresa
CREATE TABLE EnderecoEmpresa (
	idEnderecoEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    cepEnderecoEmpresa CHAR (9),
    ruaEnderecoEmpresa VARCHAR (100),
    numEnderecoEmpresa VARCHAR (8),
    bairroEnderecoEmpresa VARCHAR (80),
    cidadeEnderecoEmpresa VARCHAR (80)
);

-- Criando a tabela Empresa
CREATE TABLE Empresa (
	idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    nomeEmpresa VARCHAR (80),
    cnpjEmpresa CHAR (18),
    idEnderecoEmpresa INT -- Será a chave estrangeira que ligará a tabela de enredeço e a tabela empresa
);

-- Criando a tabela Lixeira
CREATE TABLE Lixeira (
	idLixeira INT PRIMARY KEY AUTO_INCREMENT,
    tipoLixeira VARCHAR (8),
    capacidadeLixeira VARCHAR (6),
    nivelLixeira INT,
    localizacaoLixeira VARCHAR (50),
    idEmpresa INT -- Será a chave estrangeria que ligará a tabela empresa e a tabela lixeira
);

-- Inserindo dados na tabela EnderecoEmpresa
INSERT INTO EnderecoEmpresa (cepEnderecoEmpresa, ruaEnderecoEmpresa, numEnderecoEmpresa, bairroEnderecoEmpresa, cidadeEnderecoEmpresa)
	VALUES ('01311-300', 'Avenida Paulista', '2073', 'Consolação', 'São Paulo'),
			('03031-040', 'Rua Hannemann', '415', 'Canindé', 'São Paulo'),
            ('01311-200', 'Avenida Paulista', '1337', 'Bela Vista', 'São Paulo');
            
-- Inserindo dados na tabela Empresa
INSERT INTO Empresa (nomeEmpresa, cnpjEmpresa, idEnderecoEmpresa)
	VALUES ('Carrefour Express Conjunto Nacional', '45.543.915/0001-81', 1),
			('Galeria Pagé Brás', '26.425.597/0001-00', 2),
            ('Edifício Paulista I', '02.494.013/0001-90', 3);
            
INSERT INTO Lixeira (tipoLixeira, capacidadeLixeira, nivelLixeira, localizacaoLixeira, idEmpresa)
	VALUES ('Metal', '50 L', 2, 'Entrada Loja', 1),
			('Plástico', '50 L', 1, 'Entrada Loja', 1),
            ('Papel', '50 L', 0, 'Entrada Loja', 1),
            ('Vidro', '50 L', 0, 'Entrada Loja', 1),
            ('Metal', '50 L', 0, '2º Andar Bloco A', 2),
			('Plástico', '50 L', 3, '2º Andar Bloco A', 2),
            ('Papel', '50 L', 2, '2º Andar Bloco A', 2),
            ('Vidro', '50 L', 0, '2º Andar Bloco A', 2),
            ('Metal', '50 L', 0, '15º Andar', 3),
			('Plástico', '50 L', 1, '15º Andar', 3),
            ('Papel', '50 L', 3, '15º Andar', 3),
            ('Vidro', '50 L', 0, '15º Andar', 3);
		
SELECT * FROM EnderecoEmpresa;
SELECT * FROM Empresa;
SELECT * FROM Lixeira;
            