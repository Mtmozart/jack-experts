Claro! Aqui está o README completo e corrigido:

---

# Aplicação de Gerenciamento de Tarefas - Desafio Fullstack

## Visão Geral

Este projeto é uma aplicação fullstack que permite aos usuários gerenciar suas tarefas. A aplicação possibilita a criação, leitura, atualização e exclusão (CRUD) de tarefas, além de autenticação de usuários e a filtragem de tarefas com base no status de conclusão e alteração de preferência. O objetivo é demonstrar minhas habilidades no desenvolvimento com React para o frontend e Node.js com NestJS para o backend, bem como ORM e banco de dados, além de outras ferramentas como Docker.

## Tabela de Conteúdos

- [Objetivo do Projeto](#objetivo-do-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instruções de Configuração](#instruções-de-configuração)
- [Decisões Tomadas](#decisões-tomadas)
- [Funcionalidades](#funcionalidades)
- [Considerações Extras](#considerações-extras)
- [Melhorias Futuras](#melhorias-futuras)
- [Contato](#contato)

## Objetivo do Projeto

- **Frontend**: Desenvolvi uma interface web responsiva usando React que interage com a API do backend para o gerenciamento de tarefas. A conexão é feita por meio do Axios e o design de templates utilizado foi o React Templates.
- **Backend**: Criei uma API RESTful com NestJS com autenticação de usuários via JWT e operações de CRUD para tarefas, reset de senha e fila para envio de e-mails.
- **Banco de Dados**: Para o armazenamento de usuários foi utilizado MySQL com TypeORM.
- **Autenticação**: Os usuários devem se autenticar para gerenciar suas tarefas, bem como atividades de perfis.

## Estrutura do Projeto

```
/backend  - Servidor NestJS (API)
/frontend - Aplicação React (Interface de Usuário)
/database - Scripts SQL ou configuração para MySQL com TypeORM para gerenciamento, além de Redis para gerenciamento de filas.
/infra - Docker
```

## Tecnologias Utilizadas

### Backend:

- Node.js
- NestJS
- MySQL
- Redis
- JWT para autenticação
- TypeORM
- Swagger para a documentação da API

### Frontend:

- React
- React Router (para navegação entre páginas)
- Context API (para gerenciamento de estado global)
- Axios (para consumir a API)

## Instruções de Configuração

### Requisitos

- Node.js
- MySQL
- Redis
- Git
- Ou, apenas baixar a imagem Docker

### Passos para rodar o projeto:

#### Backend:

1. Clone o repositório.
2. Navegue até a pasta `backend`.
3. Instale as dependências: `yarn install`.
4. Configure o banco de dados no arquivo `.env` com suas credenciais.
5. Execute as migrações do banco de dados: `yarn typeorm:sync`.
6. Inicie o servidor: `yarn start:dev`.
7. Acesse a documentação da API em `http://localhost:8080/api`.

#### Frontend:

1. Navegue até a pasta `frontend`.
2. Instale as dependências: `yarn install`.
3. Inicie o frontend: `npm start`.

Acesse o aplicativo em `http://localhost:3000`.

## Decisões Tomadas

- **NestJS**: Escolhido por sua simplicidade e flexibilidade, além da manipulação por módulos que o torna mais intuitivo e com inúmeras integrações.
- **Autenticação JWT**: Utilizado para proteger rotas e garantir que apenas usuários autenticados tenham acesso às tarefas.
- **Banco de dados MySQL**: Escolhido pela sua robustez e TypeORM pela sua integração mais fácil com TypeScript.
- **Banco de dados Redis**: Escolhido pela compatibilidade com o Bull do NestJS para gerenciamento de filas.
- **Índices**: Índice composto utilizado em colunas `title` e `status` para otimizar consultas que filtram por essas colunas simultaneamente.

## Funcionalidades

- **Cadastro e Login de Usuário**: Cadastro de usuários com validação básica de e-mail e senha, além da possibilidade de deletar e atualizar o usuário.
- **Reset de Senha**: Usuários podem resetar sua senha. Um código é enviado para o e-mail com uma nova senha.
- **Autenticação JWT**: Login e logout utilizando JSON Web Tokens (JWT).
- **CRUD de Tarefas**: Usuários autenticados podem criar, editar, mudar o status, favoritar e excluir tarefas.
- **Sistema de Busca de Tarefas**: Usuários autenticados podem buscar suas tarefas por título, status e se é favorita, com índices para facilitar as buscas.
- **Interface Responsiva**: A aplicação ajusta-se a diferentes tamanhos de tela, oferecendo uma boa experiência em dispositivos móveis.
- **Usuário Admin**: A aplicação suporta um perfil de admin com regras específicas de autenticação, embora a lógica não tenha sido totalmente implementada.

## Considerações Extras

- **Testes (Opcional)**: Foram adicionados testes unitários para o backend utilizando o jest e mocks, porém, não houve cobertura completa, focando apenas em serviços e controladores do usuário.
- **Deploy (Opcional)**: A aplicação foi preparada para ser implantada na Amazon AWS, porém, não será mantida, com receio de que seja cobrado.

## Contato
