const botãoVoltar=document.getElementsByClassName('botao-voltar')[0];

botãoVoltar.addEventListener('click', voltarPag);

function voltarPag(){
    window.history.back();
}