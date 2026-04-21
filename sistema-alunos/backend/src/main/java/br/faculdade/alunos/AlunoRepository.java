package br.faculdade.alunos;

import org.springframework.data.jpa.repository.JpaRepository;

// Repository do JPA, ja vem com todos os metodos basicos (save, findAll, deleteById...)
public interface AlunoRepository extends JpaRepository<Aluno, Long> {
}
