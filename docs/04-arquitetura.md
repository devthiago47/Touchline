# Touchline

# Arquitetura do Sistema

## Objetivo

Este documento define como todos os componentes do Touchline se comunicam.

O objetivo é manter uma arquitetura simples, organizada e escalável.

---

# Estrutura Geral

O projeto será dividido em quatro grandes módulos.

- Frontend
- Backend
- Banco de Dados Base
- Save da Carreira

Cada módulo possui uma responsabilidade específica.

---

# Frontend

Responsável por toda a interface do jogo.

Funções:

- Exibir telas
- Receber ações do jogador
- Mostrar partidas
- Mostrar tabelas
- Mostrar escalações
- Mostrar notícias

O Frontend nunca acessará diretamente o banco de dados.

Toda comunicação será feita através da API.

---

# Backend

O Backend será o cérebro do Touchline.

Será responsável por:

- Simular partidas
- Atualizar tabelas
- Controlar o calendário
- Processar transferências
- Evoluir jogadores
- Gerenciar temporadas
- Salvar carreiras

Nenhuma regra do jogo ficará no Frontend.

---

# Banco de Dados Base

O Banco Base armazenará informações permanentes.

Exemplos:

- Clubes
- Jogadores
- Ligas
- Competições
- Escudos
- Países

Esses dados não serão modificados durante uma carreira.

---

# Autenticação OAuth

O player poderá entrar com suan conta Google ou Github para guardar seus saves. 
Assim ele não perderá o progresso caso o navegador atualize

Abrir jogo
↓

Escolher modo de acesso

↓

Google
GitHub
Visitante

↓

Menu inicial

↓

Nova carreira

↓

Continuar carreira

O jogador poderá também entrar como visitante.
Dessa forma, ele não poderá guardar seus saves, apenas testar o jogo de maneira mais simples e prática

---

# Save da Carreira

Cada nova carreira criará um Save independente.

O Save armazenará apenas informações que mudam durante o jogo.

Exemplos:

- Overall atualizado
- Clube atual do jogador
- Idade
- Lesões
- Cartões
- Saldo financeiro
- Classificação
- Calendário
- Estatísticas
- Histórico de títulos

Isso evita duplicar milhares de registros a cada nova carreira.

---

# Comunicação

Fluxo padrão.

Jogador

↓

Frontend

↓

API

↓

Backend

↓

Banco de Dados

↓

Backend

↓

Frontend

↓

Jogador

---

# API

Toda comunicação acontecerá através de requisições.

Exemplos:

Obter elenco.

Obter classificação.

Salvar partida.

Comprar jogador.

Vender jogador.

Avançar calendário.

Carregar carreira.

Criar carreira.

---

# Organização

Cada sistema do jogo ficará separado.

Exemplo.

Sistema de partidas.

Sistema de transferências.

Sistema de treinamento.

Sistema financeiro.

Sistema de calendário.

Sistema de notícias.

Sistema de saves.

Essa separação permitirá evoluir o projeto sem comprometer outras partes.

---

# Modularização

Nenhum sistema deverá depender diretamente de outro.

Exemplo.

O sistema de treinamento não deverá modificar diretamente o banco.

Ele solicitará essa alteração ao sistema responsável.

Isso reduz erros e facilita futuras modificações.

---

# Escalabilidade

Toda funcionalidade deverá ser desenvolvida pensando em futuras expansões.

Exemplos.

Novas ligas.

Novos países.

Novas competições.

Modo online.

Modo multiplayer.

Editor de jogadores.

Seleções nacionais.

O objetivo é evitar reescrever partes importantes do projeto.

---

# Regra Principal

Cada módulo do Touchline deve possuir apenas uma responsabilidade.

Essa organização facilitará manutenção, testes e futuras atualizações.