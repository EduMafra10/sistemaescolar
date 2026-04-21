🎓 Sistema Acadêmico - Cadastro de Alunos

Sistema CRUD completo para gerenciamento de alunos, desenvolvido como trabalho da disciplina de Programação Orientada a Objetos (P1).

O projeto conta com uma arquitetura moderna, utilizando frontend em React e backend em Java com Spring Boot, seguindo boas práticas de desenvolvimento e conceitos de POO.

🚀 Acesse o sistema
🔗 Teste online:
https://sistemaescolar-phi.vercel.app/

👥 Integrantes
Eduardo Mafra Dos Santos
João Henrique Alves
Humberto Ribeiro Bezerra

⚙️ Funcionalidades
✔️ Cadastrar aluno
✔️ Listar alunos
✔️ Consultar aluno por ID
✔️ Atualizar dados do aluno
✔️ Excluir aluno (com confirmação)
✔️ Buscar aluno por nome
✔️ Validação de CPF (com dígitos verificadores)

🛠️ Tecnologias Utilizadas
🎨 Frontend
React 18 + TypeScript
Vite
React Router

⚙️ Backend
Java 17
Spring Boot 3
Spring Web
Spring Data JPA
Banco de Dados H2 (em memória)
Maven

📁 Estrutura do Projeto
sistema-alunos/
├── frontend/   # Aplicação React + TypeScript
└── backend/    # API Java com Spring Boot

🧠 Conceitos de POO Aplicados
🔒 Encapsulamento
Atributos privados com uso de getters e setters

🧩 Composição
A classe Aluno contém um objeto Endereco

🏗️ Abstração em Camadas
Arquitetura organizada em:
Controller → Service → Repository
