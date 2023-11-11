let numeroSecreto = gerarRandon();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto ;
}
exibirTextoNaTela('h1', 'jogo do numero secreto');
exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');


function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log (chute == numeroSecreto);
}

function gerarRandon(){
    return parseInt(Math.random() *10 + 1);
}