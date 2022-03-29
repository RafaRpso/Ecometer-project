-- Criando o banco dbEcometer
CREATE DATABASE dbEcometer;

-- Selecionando o banco EcoTech
USE dbEcometer;

-- Criando a tabela EnderecoEmpresa
CREATE TABLE tbEnderecoEmpresa (
    iddEnderecoEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    cepEnderecoEmpresa CHAR (9),
    ruaEnderecoEmpresa VARCHAR (100),
    numEnderecoEmpresa VARCHAR (4),
    bairroEnderecoEmpresa VARCHAR (80),
    cidadeEnderecoEmpresa VARCHAR (80)
);

-- Criando a tabela Empresa
CREATE TABLE tbEmpresa (
    idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    nomeEmpresa VARCHAR (80),
    cnpjEmpresa CHAR (18),
    idEnderecoEmpresa INT, -- Será a chave estrangeira que ligará a tabela de enredeço e a tabela empresa
    FOREIGN KEY (idEnderecoEmpresa) REFERENCES tbEnderecoEmpresa(idEnderecoEmpresa)
);

-- Criando a tabela Lixeira
CREATE TABLE tbLixeira (
    idLixeira INT PRIMARY KEY AUTO_INCREMENT,
    tipoLixeira VARCHAR (20), -- Pode ser radioativa, etc. Adicionei 20
    capacidadeLixeira VARCHAR (20), -- Não entendi. Retorna valores numéricos ou de strings (cheios, médio,etc)? Adicionei pra 20 considerando 2° hipotese
    nivelLixeira INT,
    localizacaoLixeira VARCHAR (30),
    idEmpresa INT,
    FOREIGN KEY (idEmpresa) REFERENCES tbEmpresa(idEmpresa) -- Será a chave estrangeria que ligará a tabela empresa e a tabela lixeira
);

-- Inserindo dados na tabela EnderecoEmpresa
INSERT INTO tbEnderecoEmpresa (cepEnderecoEmpresa, ruaEnderecoEmpresa, numEnderecoEmpresa, bairroEnderecoEmpresa, cidadeEnderecoEmpresa)
	VALUES ('01311-300', 'Avenida Paulista', '2073', 'Consolação', 'São Paulo'),
			('03031-040', 'Rua Hannemann', '415', 'Canindé', 'São Paulo'),
            ('01311-200', 'Avenida Paulista', '1337', 'Bela Vista', 'São Paulo');
            
-- Inserindo dados na tabela Empresa
INSERT INTO tbEmpresa (nomeEmpresa, cnpjEmpresa, idEnderecoEmpresa)
	VALUES ('Carrefour Express Conjunto Nacional', '45.543.915/0001-81', 1),
			('Galeria Pagé Brás', '26.425.597/0001-00', 2),
            ('Edifício Paulista I', '02.494.013/0001-90', 3);
            
INSERT INTO tbLixeira (tipoLixeira, capacidadeLixeira, nivelLixeira, localizacaoLixeira, idEmpresa)
	VALUES ('Metal', '50 L', 2, 'Entrada Loja', 1),
			('Plástico', '50 L', 1, 'Entrada Loja', 1),
            ('Papel', '50 L', 0, 'Entrada Loja', 1),
            ('Vidro', '50 L', 0, 'Entrada Loja', 1),
            ('Plástico', '50 L', 0, '2º Andar Bloco A', 2),
			('Plástico', '50 L', 3, '2º Andar Bloco A', 2),
            ('Papel', '50 L', 2, '2º Andar Bloco A', 2),
            ('Vidro', '50 L', 0, '2º Andar Bloco A', 2),
            ('Metal', '50 L', 0, '15º Andar', 3),
			('Plástico', '50 L', 1, '15º Andar', 3),
            ('Papel', '50 L', 3, '15º Andar', 3),
            ('Orgânico', '50 L', 0, '15º Andar', 3);
		
SELECT * FROM tbEnderecoEmpresa;
SELECT * FROM tbEmpresa;
SELECT * FROM tbLixeira;
           
