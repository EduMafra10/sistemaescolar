import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizarAluno, buscarAluno, criarAluno, type Aluno } from "../api";
import { validarCpf } from "../validarCpf";

const alunoVazio: Aluno = {
  matricula: "",
  nome: "",
  cpf: "",
  email: "",
  telefone: "",
  curso: "",
  semestre: 1,
  dataNascimento: "",
  rua: "",
  numero: "",
  cidade: "",
  uf: "",
  cep: "",
  status: "ATIVO",
};

export default function FormAluno() {
  const [aluno, setAluno] = useState<Aluno>(alunoVazio);
  const [erro, setErro] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    buscarAluno(Number(id)).then((a) => {
      if (a) setAluno(a);
    });
  }, [id]);

  function alterar(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setAluno({ ...aluno, [e.target.name]: e.target.value });
  }

  async function salvar(e: React.FormEvent) {
    e.preventDefault();
    setErro("");

    if (!validarCpf(aluno.cpf)) {
      setErro("CPF inválido. Digite um CPF válido (apenas números ou com pontos).");
      return;
    }

    if (id) {
      await atualizarAluno(Number(id), aluno);
    } else {
      await criarAluno(aluno);
    }

    navigate("/");
  }

  return (
    <form onSubmit={salvar}>
      <h2>{id ? "Editar aluno" : "Novo aluno"}</h2>

      {erro && <div className="erro">{erro}</div>}

      <h3>Dados pessoais</h3>

      <label>Matrícula</label>
      <input name="matricula" value={aluno.matricula} onChange={alterar} required />

      <label>Nome</label>
      <input name="nome" value={aluno.nome} onChange={alterar} required />

      <label>CPF</label>
      <input name="cpf" value={aluno.cpf} onChange={alterar} placeholder="000.000.000-00" required />

      <label>Data de nascimento</label>
      <input type="date" name="dataNascimento" value={aluno.dataNascimento} onChange={alterar} />

      <label>Email</label>
      <input type="email" name="email" value={aluno.email} onChange={alterar} required />

      <label>Telefone</label>
      <input name="telefone" value={aluno.telefone} onChange={alterar} placeholder="(11) 99999-9999" />

      <h3>Dados acadêmicos</h3>

      <label>Curso</label>
      <input name="curso" value={aluno.curso} onChange={alterar} required />

      <label>Semestre</label>
      <input
        type="number"
        name="semestre"
        min={1}
        max={12}
        value={aluno.semestre}
        onChange={alterar}
        required
      />

      <label>Status</label>
      <select name="status" value={aluno.status} onChange={alterar}>
        <option value="ATIVO">Ativo</option>
        <option value="INATIVO">Inativo</option>
      </select>

      <h3>Endereço</h3>

      <label>Rua</label>
      <input name="rua" value={aluno.rua} onChange={alterar} />

      <label>Número</label>
      <input name="numero" value={aluno.numero} onChange={alterar} />

      <label>Cidade</label>
      <input name="cidade" value={aluno.cidade} onChange={alterar} />

      <label>UF</label>
      <input name="uf" value={aluno.uf} onChange={alterar} maxLength={2} placeholder="SP" />

      <label>CEP</label>
      <input name="cep" value={aluno.cep} onChange={alterar} placeholder="00000-000" />

      <div className="acoes-formulario">
        <button type="submit">Salvar</button>
        <button type="button" onClick={() => navigate("/")}>Cancelar</button>
      </div>
    </form>
  );
}
