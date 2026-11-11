# Lista de Assuntos para Estudar

## Objetivo do projeto

Este é um projeto de estudo com um foco bem específico: **entender, na prática, como um frontend consome uma API de um backend.**

A aplicação em si é simples de propósito — uma lista onde é possível cadastrar assuntos que preciso estudar. O valor do projeto não está na complexidade da funcionalidade, e sim em construir, do zero, a ligação real entre as duas pontas: uma interface que faz pedidos, e um servidor que responde a esses pedidos.

## Motivação

Antes deste projeto, eu entendia o conceito de API na teoria, mas nunca tinha visto — nem construído — essa ligação funcionando na prática. Esse projeto nasceu da vontade de fechar essa lacuna com um exemplo pequeno, direto e 100% meu.

## Como a aplicação funciona

1. O frontend mostra um campo de texto e um botão para adicionar um novo assunto. ✅
2. Ao clicar em salvar, o frontend envia esse assunto para o backend através de uma requisição `POST`. ✅
3. O backend recebe o assunto e guarda numa lista. ✅
4. O frontend também pede ao backend, por uma requisição `GET`, todos os assuntos já salvos, e os exibe na tela. ⬜ *(o backend já responde ao `GET`, falta o frontend fazer o pedido ao abrir a página)*
5. Ao recarregar a página, os assuntos continuam lá, porque estão guardados no backend — não apenas na tela. ⬜ *(depende do passo 4)*

## Roadmap 

- [x] Estilizar a interface com CSS
- [x] Criar o backend em Flask com as rotas `GET` e `POST`
- [x] Enviar o assunto digitado ao backend com `fetch` (`POST`)
- [ ] Carregar a lista salva no backend ao abrir a página (`GET`)
- [ ] Permitir marcar um assunto como "já estudado"
- [ ] Permitir excluir um assunto da lista
- [ ] Substituir a lista em memória por persistência real em banco de dados (ex: SQLite)
- [ ] Deploy em um servidor acessível pela internet

## Tecnologias

- Frontend: HTML, CSS, JavaScript (`fetch`)
- Backend: Python, Flask, Flask-CORS

## Status

🚧 Em desenvolvimento — projeto de estudo pessoal. O frontend já envia os assuntos para o backend; falta fazer a página buscar a lista salva ao carregar.

![Tela do Post-it de estudos](imagens/image.png)