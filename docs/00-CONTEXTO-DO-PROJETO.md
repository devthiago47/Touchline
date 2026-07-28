# Touchline

# CONTEXTO DO PROJETO

> Este documento é a principal referência do projeto Touchline.
>
> Todo novo chat que continuar este projeto deverá ler este documento antes de qualquer outra atividade.
>
> Nenhuma decisão descrita aqui deve ser alterada sem justificativa técnica e aprovação do desenvolvedor do projeto.

---

# IDENTIDADE DO PROJETO

Nome oficial:

Touchline

Tipo:

Webgame de gerenciamento de futebol.

Inspirações:

- Brasfoot
- Football Manager
- EA Sports FC (interface)

Objetivo:

Criar um manager de futebol moderno, rápido e intuitivo, focado em decisões estratégicas.

O jogador NÃO controla os atletas durante a partida.

Ele controla apenas o clube.

---

# FILOSOFIA DO JOGO

O Touchline deve ser simples de aprender.

Mas profundo o suficiente para permitir dezenas de temporadas.

Toda decisão do treinador deverá gerar consequências.

O foco do jogo é gerenciamento.

Não é habilidade.

---

# FILOSOFIA DE DESENVOLVIMENTO

Este projeto NÃO deve ser desenvolvido de forma improvisada.

Toda funcionalidade seguirá obrigatoriamente esta ordem:

1. Planejamento
2. Documentação
3. Arquitetura
4. Implementação
5. Testes
6. Aprovação

Nunca gerar código antes da documentação.

Nunca pular etapas.

---

# STACK OFICIAL

Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

Backend

- Node.js
- Express
- TypeScript

Banco

- PostgreSQL

ORM

- Prisma

Versionamento

- Git
- GitHub

Editor

- Visual Studio Code

---

# ARQUITETURA

O projeto será dividido em módulos.

Frontend

Responsável pela interface.

Backend

Responsável pela lógica.

Banco Oficial

Responsável pelos dados originais do jogo.

Save

Responsável pelos dados de cada carreira.

Fluxo:

Jogador

↓

Frontend

↓

API

↓

Backend

↓

Banco

↓

Backend

↓

Frontend

↓

Jogador

---

# ESTRUTURA DO PROJETO

Touchline/

docs/

frontend/

backend/

database/

assets/

README.md

---

# DOCUMENTAÇÃO

A pasta docs contém toda a documentação oficial.

Arquivos atuais:

00-CONTEXTO-DO-PROJETO.md

01-visao-geral.md

02-game-design.md

03-tecnologias.md

04-arquitetura.md

05-banco-de-dados.md

06-interface.md

07-roadmap.md

08-mvp.md

09-changelog.md (ainda será criado)

---

# GAMEPLAY

Fluxo da carreira.

Nova carreira

↓

Escolher liga

↓

Escolher clube

↓

Menu Principal

↓

Gerenciar equipe

↓

Próxima partida

↓

Resultado

↓

Gerenciar clube

↓

Avançar calendário

↓

Nova partida

↓

Nova temporada

---

# MENU PRINCIPAL

O Menu Principal possuirá:

Campo de futebol com escalação.

Informações rápidas.

Próxima partida.

Últimos resultados.

Objetivos da diretoria.

Menus:

- Próxima Partida
- Elenco
- Treinamento
- Transferências
- Competições
- Notícias
- Finanças
- Configurações

---

# MOTOR DA PARTIDA (MVP)

Primeira versão.

O resultado dependerá apenas de:

- Overall médio da equipe.
- Tática escolhida.
- Mando de campo

No futuro poderão ser adicionados:

- Moral
- Forma
- Entrosamento
- Lesões
- Cansaço
- Clima
- Experiência
- Potencial

Sem alterar a arquitetura principal.

---

# BANCO DE DADOS

Existem dois tipos de dados.

Banco Oficial

Nunca muda.

Contém:

- Clubes
- Jogadores
- Ligas
- Países
- Competições

Save

Contém apenas alterações da carreira.

Exemplos:

Transferências.

Overall atualizado.

Saldo financeiro.

Classificação.

Calendário.

Histórico.

---

# MVP

O MVP deverá permitir:

Escolher liga.

Escolher clube.

Disputar temporadas.

Treinar jogadores.

Comprar jogadores.

Vender jogadores.

Disputar competições.

Salvar carreira.

Continuar carreira.

---

# METODOLOGIA

O projeto será desenvolvido em etapas.

Nenhuma etapa será iniciada antes da conclusão da anterior.

Cada etapa deverá terminar funcionando.

Não serão deixadas funcionalidades pela metade.

---

# PAPÉIS

Desenvolvedor Humano

Responsável por:

- Criar arquivos.
- Criar pastas.
- Executar comandos.
- Testar o projeto.
- Reportar erros.

ChatGPT

Responsável por:

- Arquitetura.
- Documentação.
- Banco de dados.
- Backend.
- Frontend.
- Algoritmos.
- Organização.
- Revisões.
- Explicações.
- Planejamento.

---

# REGRAS DO CHATGPT

Ao continuar este projeto:

Nunca alterar tecnologias sem justificativa.

Nunca alterar arquitetura sem justificativa.

Nunca criar código antes da documentação.

Sempre respeitar as decisões já tomadas.

Sempre priorizar código limpo.

Sempre explicar decisões importantes.

Sempre manter compatibilidade com versões anteriores.

Agir como Tech Lead do projeto.

---

# DECISÕES OFICIAIS

Decisão 001

Nome oficial:

Touchline

---

Decisão 002

Stack:

React

Node.js

PostgreSQL

Prisma

---

Decisão 003

Arquitetura:

Frontend

↓

Backend

↓

Banco

---

Decisão 004

Banco dividido entre:

Banco Oficial

+

Save

---

Decisão 005

Motor da partida MVP:

Overall + Tática

---

Decisão 006

Documentação obrigatória antes da implementação.

---

Decisão 007

Todo desenvolvimento será modular.

---

Decisão 008

O projeto será construído visando expansão futura.

---

# ETAPA ATUAL

Versão:

v0.1.0

Etapa:

1

Status:

Documentação

Situação:

Concluída.

---

# ETAPA 1.5 (PLANEJADA)

Antes de iniciar a programação, deverão ser definidos:

- Modelo completo do banco de dados (entidades e relacionamentos).
- Estrutura definitiva de pastas do frontend e backend.
- Organização das rotas da API.
- Fluxo completo de criação e carregamento de uma carreira.
- Fluxo completo de uma temporada.
- Estrutura do sistema de saves.
- Algoritmo do motor de simulação em pseudocódigo.
- Convenções de nomenclatura para arquivos, componentes e serviços.

Somente após a conclusão dessa etapa será iniciado o desenvolvimento do código.

---

# PRÓXIMA TAREFA

Etapa 2.

Preparação do ambiente de desenvolvimento.

---

# MENSAGEM PARA UM NOVO CHATGPT

Se você está lendo este documento em um novo chat, assuma imediatamente o papel de Arquiteto de Software e Tech Lead do projeto Touchline.

Considere todas as decisões deste documento como oficiais.

Não proponha mudanças sem justificativa técnica.

Continue o desenvolvimento exatamente da etapa indicada.

Mantenha a documentação sincronizada com a implementação.

Seu objetivo não é apenas gerar código, mas conduzir o desenvolvimento do Touchline até uma versão completa e jogável, mantendo qualidade de arquitetura, organização e escalabilidade.