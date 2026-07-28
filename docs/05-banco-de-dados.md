# Touchline

# Banco de Dados

## Objetivo

O banco de dados é responsável por armazenar todas as informações permanentes do jogo e de cada carreira criada pelo jogador.

A estrutura foi projetada para permitir expansão futura sem necessidade de grandes alterações.

---

# Estrutura Geral

O banco será dividido em duas partes.

## Banco Oficial

Contém os dados originais do jogo.

Exemplos:

- Ligas
- Clubes
- Jogadores
- Países
- Competições

Esses dados nunca serão alterados.

---

## Save da Carreira

Cada carreira possuirá seu próprio estado.

Serão armazenados:

- Classificação
- Tabelas
- Calendário
- Transferências
- Overall atualizado
- Histórico
- Finanças
- Estatísticas
- Idade atual dos jogadores

---

# Principais Entidades

## User

Ela armazenará os saves dos players com segurança

---

## Liga

Informações:

- Nome
- País
- Quantidade de clubes
- Regras
- Número de rodadas
- Vagas continentais
- Rebaixamento

---

## Clube

Informações:

- Nome
- Liga
- País
- Escudo
- Estádio
- Orçamento
- Reputação

---

## Jogador

Informações iniciais:

- Nome
- Idade
- Nacionalidade
- Clube
- Posição
- Overall
- Potencial

Informações dinâmicas:

- Moral
- Forma
- Lesão
- Suspensão
- Evolução
- Histórico

---

## Partida

Cada partida armazenará:

- Competição
- Rodada
- Data
- Mandante
- Visitante
- Placar
- Eventos
- Estatísticas

---

## Temporada

Cada temporada armazenará:

- Ano
- Competições disputadas
- Campeões
- Artilheiros
- Rebaixados
- Classificações

---

## Save

Cada save possuirá:

- Nome da carreira
- Clube escolhido
- Liga inicial
- Data atual
- Temporada
- Progresso

---

# Filosofia

O banco deve ser simples, organizado e preparado para crescimento futuro.

Novas funcionalidades deverão reutilizar a estrutura existente sempre que possível.