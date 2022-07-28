//Redirecionando para o link ao clicar no botão "START ORDER"

const botaoPedido=document.getElementsByClassName('botao-pedido')[0];
const botãoVoltar=document.getElementsByClassName('botao-voltar')[0];

 botãoVoltar.addEventListener('click', voltarPag);
 botaoPedido.addEventListener('click',carregar );

 function carregar(){
   window.location.href='../PágBotãoSTARTORDER/index.html';
 }

 function voltarPag(){
     window.location.href='../PágInicial/index.html'
 }