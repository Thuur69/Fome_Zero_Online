package com.bancodealimentos.Repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bancodealimentos.classes.pessoa;

public interface PessoaRepositorio extends JpaRepository<pessoa, Long> {
    
}
