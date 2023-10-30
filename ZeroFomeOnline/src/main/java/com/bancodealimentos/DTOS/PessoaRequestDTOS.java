package com.bancodealimentos.DTOS;

import java.sql.Date;

public record PessoaRequestDTOS(Long pessoa_id, 
                                String cpf_pessoa, 
                                String nome_pessoa, 
                                Integer contato_pessoa,
                                String pessoa_email,
                                String pessoa_genero,
                                Date data_nascimento,
                                String pessoa_cep,
                                String pessoa_rua,
                                String pessoa_bairro,
                                String pessoa_cidade,
                                String pessoa_estado,
                                Integer pessoa_nr_residencia,
                                String pessoa_usuario,
                                String pessoa_senha) 
                                {
    
                                    

}
