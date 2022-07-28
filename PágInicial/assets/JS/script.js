const botaoFood=document.getElementsByClassName('botao-one')[0];
const botaoOrders=document.getElementsByClassName('botao-two')[0];
const botaoPerfil=document.getElementsByClassName('botao-three')[0];
const botaoVerProduto=document.getElementsByTagName('button')[0];
const botaoVerCurso=document.getElementsByClassName('botao-curso')[0];
const input=document.querySelector('#search-bar');



input.addEventListener('input', filtrar);

function filtrar(){
  console.log(input.value)

}

//funções e eventos que redirecionam para outrs paginas principais
botaoVerProduto.addEventListener('click', redirecionarPatissier);
botaoVerCurso.addEventListener('click', redirecCurso)

function redirecCurso(){
  window.location.href='../PágBotãoCurso/index.html'
}

function redirecionarPatissier(){
  window.location.href='../PágBotãoPatissier/index.html'
}

//funções e eventos que trocam a cor dos botões chamam food, orders e perfil
botaoFood.addEventListener("click", mudaCorBotaoA);
botaoOrders.addEventListener("click", mudaCorBotaoB);
botaoPerfil.addEventListener("click", mudaCorBotaoC);


function mudaCorBotaoA(){

 selectBotoes(botaoFood);

}

function mudaCorBotaoB(){

 selectBotoes(botaoOrders);
 redirecBotoesNav('../PágOrders/index.html');
}

function mudaCorBotaoC(){

 selectBotoes(botaoPerfil);
 redirecBotoesNav('../PágPerfil/index.html');
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