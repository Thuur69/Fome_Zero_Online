package com.bancodealimentos.classes;

import java.sql.Date;

import com.bancodealimentos.DTOS.PessoaRequestDTOS;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "pessoa")
@Entity(name = "pessoa")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "pessoa_id")

public class pessoa {
    
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long pessoa_id;
    private String cpf_pessoa;
    private String nome_pessoa;
    private Integer contato_pessoa;
    private String pessoa_email;
    private String pessoa_genero;
    private Date data_nascimento;
    private String pessoa_cep;
    private String pessoa_rua;
    private String pessoa_bairro;
    private String pessoa_cidade; 
    private String pessoa_estado; 
    private Integer pessoa_nr_residencia; 
    private String pessoa_usuario; 
    private String pessoa_senha;


    public pessoa(PessoaRequestDTOS data) {
        pessoa_id                = data.pessoa_id();
        cpf_pessoa               = data.cpf_pessoa();
        nome_pessoa              = data.nome_pessoa();
        contato_pessoa           = data.contato_pessoa();
        pessoa_email             = data.pessoa_email();
        pessoa_genero            = data.pessoa_genero();
        data_nascimento          = data.data_nascimento();
        pessoa_cep               = data.pessoa_cep();
        pessoa_rua               = data.pessoa_rua();
        pessoa_bairro            = data.pessoa_bairro();
        pessoa_cidade            = data.pessoa_cidade();
        pessoa_estado            = data.pessoa_estado();
        pessoa_nr_residencia     = data.pessoa_nr_residencia();
        pessoa_usuario           = data.pessoa_usuario();
        pessoa_senha             = data.pessoa_senha();
    }
    
}
