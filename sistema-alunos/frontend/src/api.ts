// "API" simulada usando localStorage
// (no projeto real, essas funcoes chamam o backend Spring em http://localhost:8080/api/alunos)

const CHAVE = "alunos";

export type Aluno = {
  id?: number;
  matricula: string;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  curso: string;
  semestre: number;
  dataNascimento: string;
  rua: string;
  numero: string;
  cidade: string;
  uf: string;
  cep: string;
  status: string;
};

function ler(): Aluno[] {
  const raw = localStorage.getItem(CHAVE);
  return raw ? JSON.parse(raw) : [];
}

function salvar(lista: Aluno[]) {
  localStorage.setItem(CHAVE, JSON.stringify(lista));
}

export async function listarAlunos(): Promise<Aluno[]> {
  return ler();
}

export async function buscarAluno(id: number): Promise<Aluno | undefined> {
  return ler().find((a) => a.id === id);
}

export async function criarAluno(aluno: Aluno): Promise<Aluno> {
  const lista = ler();
  const novo = { ...aluno, id: Date.now() };
  lista.push(novo);
  salvar(lista);
  return novo;
}

export async function atualizarAluno(id: number, aluno: Aluno): Promise<Aluno> {
  const lista = ler();
  const idx = lista.findIndex((a) => a.id === id);
  if (idx >= 0) {
    lista[idx] = { ...aluno, id };
    salvar(lista);
  }
  return aluno;
}

export async function excluirAluno(id: number): Promise<void> {
  const lista = ler().filter((a) => a.id !== id);
  salvar(lista);
}
