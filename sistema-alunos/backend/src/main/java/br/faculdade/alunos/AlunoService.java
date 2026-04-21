package br.faculdade.alunos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// Service: poderia ter regra de negocio aqui (ex: validar CPF)
// Por enquanto so chama o repository mesmo
@Service
public class AlunoService {

    @Autowired
    private AlunoRepository repo;

    public List<Aluno> listar() {
        return repo.findAll();
    }

    public Aluno buscar(Long id) {
        return repo.findById(id).orElse(null);
    }

    public Aluno salvar(Aluno a) {
        return repo.save(a);
    }

    public Aluno atualizar(Long id, Aluno a) {
        a.setId(id);
        return repo.save(a);
    }

    public void excluir(Long id) {
        repo.deleteById(id);
    }
}
