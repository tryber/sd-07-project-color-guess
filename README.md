# Requisitos do projeto

### 💡Veja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode ~~e deve~~ ir além para deixar o projeto com a sua cara e impressionar à todos!

<p align="center">
  <img
    class="rounded mx-auto d-block"
    src="/guess-the-color.gif"
    alt="Gif exibindo um jogo de adivinhar a cor"
  >
</p>

## ⚠️ Leia-os atentamente e siga à risca o que for pedido. Em particular, **atente-se para os nomes de _ids_ que alguns elementos de seu projeto devem possuir**. ⚠️

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

---
## Requisitos Obrigatórios:

Neste projeto, você implementará um adivinhador de cor RGB. Ou seja, dada uma string RGB, você irá fornecer 6 alternativas visuais de cores, sendo uma delas a correta! Você poderá estilizar seu projeto da **forma que desejar** desde que todos os requisitos sejam cumpridos. Use sua imaginação! 🧠

---

## Requisitos do projeto

### 1 - O seu site deve possuir um título com o nome do seu jogo

- O **id** do seu título deve ser `title`

### 2 - A página deve possuir o texto RGB a ser adivinhado

- O seu **id** deve ser `rgb-color`
- Esse texto deve conter os três números das cores RGB a ser adivinhada, no seguinte formato: `(168, 34, 1)`

### 3 - A página deve conter opções de cores para serem adivinhadas

- Deve conter 6 bolas como opção de cor de adivinhação
- A **class** de todas as bolas deve ser `ball`

### 4 - Ao clicar em uma bola, deve ser mostrado um texto

- Quando o jogo é iniciado, o texto exibido deve ser `"Escolha uma cor"`
- Se a bola clicada for a **correta**, deve ser exibido o texto `"Acertou!"`
- Se a bola clicada for a **incorreta**, deve ser exibido o texto `"Errou! Tente novamente!"`
- O seu **id** deve ser `answer`

### 5 - As cores das bolas devem ser geradas

- Ao carregar a página, as cores devem ser geradas via JavaScript

### 6 - Crie um botão para iniciar/reiniciar o jogo

- O elemento deve ter o **id** `reset-game`.
- Ao clicar no botão, novas cores devem ser geradas via JavaScript e o elemento `rgb-color` deve ser atualizado
- Ao clicar no botão, o elemento `answer` deve voltar ao estado inicial, exibindo o texto `"Escolha uma cor"`

## BÔNUS

### 7 - Crie um placar que incremente 3 pontos para cada acerto no jogo

- O elemento deve ter o **id** `score`.
- O valor inicial dele deve ser 0.
- A cada acerto, é incrementado 3 pontos ao placar
- Ao clicar no botão reiniciar, o placar **NÃO** deve ser resetado