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

09-changelog.md

---

# GAMEPLAY

Fluxo da carreira:

Nova carreira

↓

Escolher liga

↓

Escolher clube

↓

Gerar temporada

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

- Campo de futebol com escalação
- Informações rápidas
- Próxima partida
- Últimos resultados
- Objetivos da diretoria

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

# SISTEMA DE CALENDÁRIO

Status:

Implementado no frontend.

Estrutura atual:


Career

↓

Season

↓

Round[]

↓

Fixture[]


Uma temporada agora é organizada por rodadas.

Cada rodada possui seus confrontos.

Exemplo:


Temporada 2026

Rodada 1

Flamengo x Palmeiras

Corinthians x Santos

Rodada 2


---

# GERAÇÃO DE CALENDÁRIO

Implementado:

- Algoritmo Round Robin.
- Geração automática de confrontos.
- Controle de rodadas.
- Um clube não enfrenta ele mesmo.
- Cada clube possui apenas um jogo por rodada.
- Suporte para quantidade ímpar de clubes utilizando clube de folga.
- Embaralhamento dos clubes antes da geração.
- Sorteio do mando de campo.

O calendário é responsável somente pela competição.

Ele não sabe qual clube pertence ao jogador.

---

# MOTOR DA PARTIDA (MVP)

Primeira versão.

O resultado dependerá apenas de:

- Overall médio da equipe.
- Tática escolhida.
- Mando de campo.

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

- Transferências
- Overall atualizado
- Saldo financeiro
- Classificação
- Calendário
- Histórico

---

# MVP

O MVP deverá permitir:

- Escolher liga.
- Escolher clube.
- Disputar temporadas.
- Treinar jogadores.
- Comprar jogadores.
- Vender jogadores.
- Disputar competições.
- Salvar carreira.
- Continuar carreira.

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

Decisão 009

O modelo de clube será preparado para suportar clubes oficiais e clubes personalizados no futuro, sem criar sistemas separados.

---

Decisão 010

O motor de partida considerará a adequação de posição dos jogadores.

Jogadores escalados fora de suas posições terão redução de eficiência, afetando o overall efetivo utilizado na simulação das partidas.

---

Decisão 011

A entidade Club não armazenará cidade no modelo inicial.

O clube possuirá um estádio associado, pois ele poderá influenciar futuramente:

- capacidade de público;
- renda de partidas;
- mando de campo;
- reputação;
- melhorias estruturais.

---

Decisão 012

O Touchline utilizará um único orçamento por clube.

O valor financeiro do clube será o mesmo valor disponível para o jogador utilizar durante a carreira.

---

Decisão 013

O sistema de títulos da carreira armazenará conquistas por competição, contendo o nome do troféu e a quantidade de vezes conquistada.

---

Decisão 014 — Sistema de autenticação e saves

O Touchline oferecerá autenticação via OAuth (Google e GitHub) e modo visitante.

Usuários autenticados terão suas carreiras armazenadas na nuvem e vinculadas à sua conta.

Usuários visitantes terão carreiras armazenadas apenas localmente no navegador.

A autenticação será tratada como um módulo independente, preservando a separação entre frontend, backend e sistema de saves.

---

Decisão 015 — Sistema de calendário

O Touchline utilizará um sistema de calendário baseado em rodadas.

A estrutura oficial será:

Season

↓

Round[]

↓

Fixture[]


O calendário será gerado automaticamente através de algoritmo Round Robin.

A geração deverá:

- criar confrontos entre todos os clubes;
- evitar confrontos contra o próprio clube;
- controlar rodadas;
- definir mandos;
- permitir expansão futura para turno e returno.

---

# ETAPA ATUAL

Versão:

v0.2.0

Etapa:

4

Nome:

Implementação da Base do Sistema

Status:

Em andamento.

Concluído:

✅ Seleção de liga  
✅ Seleção de clube  
✅ Criação de carreira  
✅ Dashboard inicial  
✅ Estrutura Season/Round/Fixture  
✅ Geração automática de calendário  
✅ Round Robin inicial  

---

# PRÓXIMA TAREFA

Etapa 4.4

Sistema de avanço de calendário.

Objetivos:

- Criar botão "Próxima Rodada".
- Executar partidas da rodada atual.
- Gerar resultados.
- Atualizar classificação.
- Registrar histórico de partidas.
- Avançar temporada.

---

# MENSAGEM PARA UM NOVO CHATGPT

Se você está lendo este documento em um novo chat, assuma imediatamente o papel de Arquiteto de Software e Tech Lead do projeto Touchline.

Considere todas as decisões deste documento como oficiais.

Não proponha mudanças sem justificativa técnica.

O projeto atualmente está na Etapa 4 — Implementação da Base do Sistema.

O calendário já possui estrutura:

Season → Round[] → Fixture[]

Continue exatamente da próxima tarefa indicada.

Mantenha a documentação sincronizada com a implementação.

Não gere código antes de entender o estado atual.

Seu objetivo é conduzir o desenvolvimento do Touchline até uma versão completa e jogável, mantendo qualidade de arquitetura, organização e escalabilidade.