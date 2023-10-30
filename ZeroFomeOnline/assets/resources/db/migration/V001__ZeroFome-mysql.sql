CREATE DATABASE BancoAlimentos;


USE BancoAlimentos;


CREATE TABLE pessoa_doadora (
    pessoa_id INT PRIMARY KEY,
    pessoa_nome VARCHAR(100),
    pessoa_contato VARCHAR(15),
    pessoa_email VARCHAR(100),
    pessoa_cpf VARCHAR(14),
    pessoa_genero VARCHAR(20),
    pessoa_nascimento DATE,
    pessoa_cep VARCHAR(10),
    pessoa_rua VARCHAR(100),
    pessoa_bairro VARCHAR(100),
    pessoa_estado VARCHAR(50),
    pessoa_numero_de_residencia VARCHAR(10)
);


CREATE TABLE registro_alimentos (
    idregistro_alimentos INT PRIMARY KEY,
    quantidade INT,
    tipo_alimentacao VARCHAR(50),
    data_de_doacao DATE
);


CREATE TABLE controle_validade (
    idcontrole_validade INT PRIMARY KEY,
    validade_do_produto DATE
);


CREATE TABLE beneficiarios (
    id_beneficiarios INT PRIMARY KEY,
    beneficiarios_nome VARCHAR(100),
    beneficiarios_contato VARCHAR(15),
    beneficiarios_tamanho_fml BOOLEAN,
    beneficiarios_cpf VARCHAR(14)
);


CREATE TABLE pontos_distribuicao (
    idpontos_distribuicao INT PRIMARY KEY,
    pontos_distribuicao_nome VARCHAR(100)
);o