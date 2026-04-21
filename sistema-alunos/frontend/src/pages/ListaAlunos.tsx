import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { excluirAluno, listarAlunos, type Aluno } from "../api";

export default function ListaAlunos() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [busca, setBusca] = useState("");
  const [alunoParaExcluir, setAlunoParaExcluir] = useState<Aluno | null>(null);
  const navigate = useNavigate();

  async function carregar() {
    const dados = await listarAlunos();
    setAlunos(dados);
  }

  async function confirmarExclusao() {
    if (!alunoParaExcluir?.id) return;
    await excluirAluno(alunoParaExcluir.id);
    setAlunoParaExcluir(null);
    carregar();
  }

  useEffect(() => {
    carregar();
  }, []);

  const alunosFiltrados = alunos.filter((a) =>
    a.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <h2>Alunos cadastrados</h2>

      <input
        type="text"
        placeholder="Buscar por nome..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="busca"
      />

      {alunosFiltrados.length === 0 ? (
        <p>Nenhum aluno encontrado.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Nome</th>
              <th>Curso</th>
              <th>Cidade/UF</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {alunosFiltrados.map((a) => (
              <tr key={a.id}>
                <td>{a.matricula}</td>
                <td>{a.nome}</td>
                <td>{a.curso}</td>
                <td>{a.cidade}/{a.uf}</td>
                <td>
                  <span className={a.status === "ATIVO" ? "tag-ativo" : "tag-inativo"}>
                    {a.status}
                  </span>
                </td>
                <td>
                  <button onClick={() => navigate(`/editar/${a.id}`)}>Editar</button>
                  <button onClick={() => setAlunoParaExcluir(a)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {alunoParaExcluir && (
        <div className="modal-fundo" onClick={() => setAlunoParaExcluir(null)}>
          <div className="modal-caixa" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-titulo">Confirmar exclusão</h3>
            <p className="modal-texto">
              Deseja realmente excluir o aluno <strong>{alunoParaExcluir.nome}</strong>?
              Essa ação não pode ser desfeita.
            </p>
            <div className="modal-acoes">
              <button
                type="button"
                className="botao-cancelar"
                onClick={() => setAlunoParaExcluir(null)}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="botao-excluir"
                onClick={confirmarExclusao}
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
