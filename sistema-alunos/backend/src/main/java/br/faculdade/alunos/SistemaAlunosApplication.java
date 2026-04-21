package br.faculdade.alunos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// Classe principal, é só essa que sobe o servidor
@SpringBootApplication
public class SistemaAlunosApplication {

    public static void main(String[] args) {
        SpringApplication.run(SistemaAlunosApplication.class, args);
    }
}
