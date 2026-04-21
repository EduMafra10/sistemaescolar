import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ListaAlunos from "./pages/ListaAlunos";
import FormAluno from "./pages/FormAluno";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="pagina">
        <header className="topo">
          <h1>Sistema de Cadastro de Alunos</h1>
          <nav>
            <Link to="/">Lista</Link>
            <Link to="/novo">Novo aluno</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<ListaAlunos />} />
            <Route path="/novo" element={<FormAluno />} />
            <Route path="/editar/:id" element={<FormAluno />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
