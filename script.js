let tela = document.querySelector("#tela-de-pintura")
let corAzul = document.querySelector("#pincel-azul")
let corVermelha = document.querySelector("#pincel-vermelho")
let corVerde = document.querySelector("#pincel-verde")
let corMarrom = document.querySelector("#pincel-marrom")
let corRoxo = document.querySelector("#pincel-roxo")
let corRosa = document.querySelector("#pincel-rosa")
let corLaranja = document.querySelector("#pincel-laranja")
let corBranco = document.querySelector("#pincel-branco")
let corPreto = document.querySelector("#pincel-preto")

corAzul.addEventListener("click", azul);
corVermelha.addEventListener("click",vermelho);
corVerde.addEventListener("click", verde);
corMarrom.addEventListener("click", marrom);
corRoxo.addEventListener("click",roxo);
corRosa.addEventListener("click", rosa);
corLaranja.addEventListener("click", laranja);
corBranco.addEventListener("click",branco);
corPreto.addEventListener("click", preto);


let nomeCor = document.querySelector("h3")

function azul(){
    tela.style.background ="blue";
    nomeCor.innerHTML = "blue";
}
function vermelho(){
    tela.style.background ="red";
    nomeCor.innerHTML = "red";
}
function verde(){
    tela.style.background ="green";
    nomeCor.innerHTML = "green";
}
function marrom(){
    tela.style.background ="brown";
    nomeCor.innerHTML = "brown";
}
function roxo(){
    tela.style.background ="purple";
    nomeCor.innerHTML = "purple";
}
function rosa(){
    tela.style.background ="pink";
    nomeCor.innerHTML = "pink";
}
function laranja(){
    tela.style.background ="orange";
    nomeCor.innerHTML = "orange";
}
function branco(){
    tela.style.background ="white";
    nomeCor.innerHTML = "white";
}
function preto(){
    tela.style.background ="black";
    nomeCor.innerHTML = "black";
}
