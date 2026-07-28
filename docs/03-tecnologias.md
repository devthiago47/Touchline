# Touchline

# Tecnologias do Projeto

## Objetivo

Este documento define todas as tecnologias utilizadas no desenvolvimento do Touchline.

O objetivo é manter um padrão durante todo o projeto e evitar mudanças desnecessárias de tecnologia.

---

# Frontend

Tecnologia:

- React

Linguagem:

- TypeScript

Ferramenta de Build:

- Vite

Estilização:

- Tailwind CSS

Objetivo:

O React será responsável por toda a interface do jogo.

Toda interação do jogador acontecerá através do frontend.

---

# Backend

Tecnologia:

- Node.js

Framework:

- Express.js

Linguagem:

- TypeScript

Objetivo:

O backend será responsável por toda a lógica do jogo.

Entre elas:

- Simulação das partidas
- Mercado de transferências
- Evolução dos jogadores
- Calendário
- Competições
- Sistema de salvamento
- IA dos clubes

---

# Banco de Dados

Banco escolhido:

- PostgreSQL

Objetivo:

Armazenar todas as informações do jogo.

Exemplos:

- Jogadores
- Clubes
- Ligas
- Competições
- Saves
- Estatísticas

---

# ORM

Tecnologia:

- Prisma ORM

Objetivo:

Facilitar a comunicação entre o backend e o banco de dados.

O Prisma permitirá manipular os dados utilizando TypeScript sem escrever SQL manualmente na maior parte do projeto.

---

# Controle de Versão

Ferramentas:

- Git
- GitHub

Objetivo:

Controlar todas as alterações do projeto.

Cada funcionalidade deverá possuir seu próprio commit.

---

# Organização

O projeto será dividido em três partes principais:

Frontend

Responsável pela interface.

Backend

Responsável pela lógica.

Banco de Dados

Responsável pelo armazenamento das informações.

---

# Arquitetura Geral

Frontend

↓

API

↓

Backend

↓

Banco de Dados

Toda comunicação entre o frontend e o banco será realizada através do backend.

O frontend nunca acessará o banco de dados diretamente.

---

# Padrões do Projeto

Durante todo o desenvolvimento serão seguidas as seguintes regras:

- Utilizar TypeScript em todo o projeto.
- Manter o código organizado em módulos.
- Evitar duplicação de código.
- Priorizar legibilidade em vez de soluções complexas.
- Documentar funcionalidades importantes antes da implementação.

---

# Filosofia Tecnológica

O Touchline será desenvolvido utilizando tecnologias modernas, gratuitas e amplamente utilizadas no mercado.

As escolhas priorizam:

- Facilidade de manutenção.
- Escalabilidade.
- Organização.
- Performance.
- Facilidade para novos colaboradores.

Novas tecnologias só serão adicionadas caso tragam benefícios claros ao projeto.