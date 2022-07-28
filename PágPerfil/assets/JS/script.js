const botaoFood=document.getElementsByClassName('botao-one')[0];
const botaoOrders=document.getElementsByClassName('botao-two')[0];
const botaoPerfil=document.getElementsByClassName('botao-three')[0];
const botaoVerProduto=document.getElementsByTagName('button')[0];

//funções e eventos que trocam a cor dos botões chamam food, orders e perfil
botaoFood.addEventListener("click", mudaCorBotaoA);
botaoOrders.addEventListener("click", mudaCorBotaoB);
botaoPerfil.addEventListener("click", mudaCorBotaoC);


function mudaCorBotaoA(){

 selectBotoes(botaoFood);
 redirecBotoesNav('../PágInicial/index.html');
}

function mudaCorBotaoB(){

 selectBotoes(botaoOrders);
 redirecBotoesNav('../PágOrders/index.html')

}

function mudaCorBotaoC(){

 selectBotoes(botaoPerfil);;
}

function resetBotoes(){
botaoFood.style.color='grey'
botaoOrders.style.color='grey'
botaoPerfil.style.color='grey'
}

function selectBotoes(elemen){
  resetBotoes();
  elemen.style.color="#cd853f"
  return
}

//Redirecionando para as págs. de cada botão (food, orders e perfil)

function redirecBotoesNav(url){
  window.location.href=url
  return;
}