# Touchline

# Game Design Document (GDD)

## Objetivo

O Touchline é um jogo de gerenciamento de futebol onde o jogador assume o papel de treinador de um clube.

O foco do jogo não é controlar os atletas durante a partida, mas sim tomar decisões estratégicas antes e durante os jogos para alcançar os melhores resultados possíveis.

---

# Ciclo principal do jogo

Toda a carreira seguirá o mesmo fluxo.

Iniciar carreira

↓

Escolher liga

↓

Escolher clube

↓

Menu principal

↓

Gerenciar equipe

↓

Disputar partida

↓

Receber resultado

↓

Gerenciar consequências

↓

Avançar calendário

↓

Próxima partida

↓

Nova temporada

---

# Escolha da Liga

Ao iniciar uma nova carreira, o jogador deverá escolher uma liga disponível.

Versão MVP:

- Brasileirão Série A
- Premier League
- LaLiga
- Serie A
- Ligue 1
- Liga Portugal

Cada liga possui:

- Clubes próprios
- Regulamento
- Calendário
- Classificação
- Vagas continentais
- Rebaixamento

---

# Escolha do Clube

Após selecionar uma liga, o jogador escolhe um dos clubes participantes.

Cada clube possui:

- Elenco
- Orçamento
- Overall
- Objetivos
- Reputação

---

# Menu Principal

O Menu Principal será a tela mais utilizada do jogo.

Ela deverá apresentar:

- Escalação atual desenhada em um campo de futebol.
- Próxima partida.
- Competição atual.
- Rodada.
- Data.

Além disso, possuirá os seguintes menus:

- Próxima Partida
- Elenco
- Treinamento
- Transferências
- Competições
- Notícias
- Finanças
- Configurações

---

# Próxima Partida

Ao iniciar uma partida, será exibido:

- Escudo do clube do jogador
- Escudo do adversário
- Nome das equipes
- Placar
- Cronômetro
- Barra de acontecimentos em tempo real

Durante a partida o treinador poderá:

- Pausar a partida
- Alterar a formação
- Alterar a tática
- Fazer substituições
- Alterar a velocidade da simulação
- Pular para o resultado final

Após o término da partida serão apresentados:

- Placar final
- Gols
- Assistências
- Cartões
- Estatísticas básicas

---

# Elenco

O treinador poderá:

- Escalar titulares
- Definir reservas
- Alterar posições
- Consultar informações dos jogadores

Cada jogador possuirá informações como:

- Nome
- Idade
- Nacionalidade
- Posição
- Overall
- Potencial
- Clube

---

# Treinamento

O treinamento será responsável pela evolução dos atletas.

Jogadores entre 16 e 20 anos tendem a evoluir mais rapidamente.

Jogadores mais velhos tendem a perder overall conforme envelhecem.

A evolução dependerá principalmente da idade e dos treinamentos realizados.

---

# Transferências

O treinador poderá:

- Comprar jogadores
- Vender jogadores
- Emprestar jogadores
- Receber propostas

Todas as negociações acontecerão durante as janelas de transferências.

---

# Competições

Cada carreira possuirá diversas competições.

Exemplo para clubes brasileiros:

- Brasileirão
- Copa do Brasil
- Libertadores
- Sul-Americana

As classificações para competições internacionais seguirão os regulamentos reais de cada liga.

---

# Sistema de Partidas (MVP)

Na primeira versão do jogo, o resultado das partidas será calculado utilizando apenas dois fatores principais:

- Overall médio da equipe titular.
- Tática escolhida pelo treinador.

No futuro novos fatores poderão ser adicionados sem alterar a estrutura principal do sistema.

---

# Filosofia de Desenvolvimento

O Touchline será desenvolvido em etapas.

Cada nova funcionalidade deverá:

1. Ser documentada.
2. Ser implementada.
3. Ser testada.
4. Ser aprovada antes da próxima etapa.

Nenhuma funcionalidade será adicionada diretamente ao código sem documentação prévia.