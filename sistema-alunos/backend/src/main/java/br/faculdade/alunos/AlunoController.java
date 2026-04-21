package br.faculdade.alunos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Controller REST: expoe os endpoints em /api/alunos
// Liberei CORS pro front conseguir chamar do localhost:5173
@RestController
@RequestMapping("/api/alunos")
@CrossOrigin(origins = "*")
public class AlunoController {

    @Autowired
    private AlunoService service;

    // Listagem
    @GetMapping
    public List<Aluno> listar() {
        return service.listar();
    }

    // Consulta por id
    @GetMapping("/{id}")
    public Aluno buscar(@PathVariable Long id) {
        return service.buscar(id);
    }

    // Cadastramento
    @PostMapping
    public Aluno criar(@RequestBody Aluno aluno) {
        return service.salvar(aluno);
    }

    // Alteracao
    @PutMapping("/{id}")
    public Aluno atualizar(@PathVariable Long id, @RequestBody Aluno aluno) {
        return service.atualizar(id, aluno);
    }

    // Exclusao
    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        service.excluir(id);
    }
}
