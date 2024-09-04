# DESAFIO 01

# ASSUNTO ESTUDADO ESSA SEMANA:

## Tudo é Objeto - JavaScript Antes do Framework (React ou Vue.js)

- "Tudo é objeto"
- Arrow Function
- Destructuring
- Rest e Spread
- Modules
- Fetch
- Asynch
- Array
- Expressões
- Class

---

## Funcionalidades:

1. **Tela de Carregamento**:
   - O sistema inicia com uma tela de carregamento que exibe um logo e uma animação de carregamento (GIF).
   - Esta tela permanece visível por **4 segundos**.

2. **Redirecionamento**:
   - Após 4 segundos, o usuário é automaticamente redirecionado para uma outra página.

3. **Tela de Apresentação 1**:
   - Página com uma breve introdução do site com um botão para passar à próxima página.

4. **Tela de Apresentação 2**:
   - Página com uma breve introdução do site com um botão para passar à próxima página e uma seta para voltar à página anterior.

5. **Tela de Apresentação 3**:
   - Página com uma breve introdução do site com um botão para passar à próxima página e uma seta para voltar à página anterior.

6. **Tela de login**: 
   - Página com 4 opções de login. Os botões do Facebook, Google e Apple são direcionados para seus respectivos sites.
   - Se o usuário clicar em Sign Up ele será direcionado para a página de registro.

7. **Tela de Registro**: 
   - Página de registro com 4 inputs e dois botões, um para voltar e outro para realizar o registro.
   - Se a senha não for igual a confirmação ele mostrará um erro.
   - Ao fazer o registro será direcionado para a página de sucesso.

8. **Tela de Sucesso**:
   - Página mostrando o nome e o email do usuário. 
   - Botão de voltar à página de login

---

## Estrutura do Projeto

- **Pasta `assets/`**: Contém os arquivos de imagem usados na tela de carregamento, como as logos, apresentação, bolas, setas e a animação GIF.
- **Pasta `src/`**: Pasta que mantém as pastas: `styles`, `scripts`, `pages`.
- **Pasta `src/pages`**: Pasta que contém or arquivos html com as informações
- **Pasta `src/styles`**: Pasta que guarda os estilos responsáveis por personalizar a aparência das páginas.
- **Pasta `src/scripts`**: Pasta com os Scripts em JavaScript responsável pelas funcionalidades.

---

## Como Funciona

1. O usuário acessa a página `index.html`, que exibe o logo e o GIF de carregamento.
2. O JavaScript no arquivo `loading.js` inicia um temporizador de 4 segundos.
3. Quando o tempo expira, o usuário é redirecionado automaticamente para `presentation.html`.
4. A página `presentation.html` exibe uma apresentação sobre o site Pomo.
5. A página `secondPresentation.html` exibe uma apresentação sobre o site Pomo e tem uma seta para voltar à página anterior.
6. A página `thirdPresentation.html` exibe uma apresentação sobre o site Pomo e tem uma seta para voltar à página anterior.
7. Uma página de login, se o usuário clicar em um dos logins ele será direcionado para a página principal do seu respectivo site. Se clicar em Registro ele será direcionado `register.html` e tem uma seta para voltar à página anterior.
8. A página `register.html` é uma tela de cadastro que recebe: 
- Nome
- Email
- Senha
- Confirmação da senha
9. Se a confirmação de senha for diferente da senha original ele mandará um aviso que a senha não corresponde, quando o usuário fizer o registro ele será direcionado para `succes.html` que mostra o nome e o email do usuário dando um botão para ele voltar à página de login.

---

## Imagens Usadas

![Logo](assets/logo-pomo.png)
![Gif Loading](assets/loading.gif)
![Seta](assets/Vector.svg)
![Seta Vermelha](assets/Vector%20(1).svg)
![Apresentação](assets/img-screen1%201.svg)
![Segunda Apresentação](assets/img-screen2%201.svg)
![Terceira Apresentação](assets/img-screen3%201.svg)
![Bola Vermelha](assets/Rectangle%201.svg)
![Bola Cinza](assets/Ellipse%201.svg)
![Logo Facebook](assets/fb-logo.svg)
![Logo Google](assets/google-logo.svg)
![Logo Apple](assets/apple-logo.png)