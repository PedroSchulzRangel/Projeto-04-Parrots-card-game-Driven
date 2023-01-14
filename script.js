const nomesDosGifs = 
["bobrossparrot","explodyparrot",
"fiestaparrot", "metalparrot",
"revertitparrot", "tripletsparrot", 
"unicornparrot"];
let clicks = 0;
let srcImgFaceDeTras = [];
let elementoDivFaceDaFrente = [];
let elementoDivFaceDeTrás = [];
let numeroDeCartas = 0;
let contadorCartasCorretas = 0;

function distribuirCartas(){
    //Perguntar para o usuário com quantas cartas ele quer jogar
    numeroDeCartas = Number(prompt("Com quantas cartas você quer jogar?"));
    //Caso o número de cartas seja inválido, repetir o prompt em loop
    while(numeroDeCartas % 2 !== 0 || numeroDeCartas < 4 || numeroDeCartas > 14){
        alert("Número inválido. Por favor, digite um número par de 4 a 14");
        numeroDeCartas = Number(prompt("Com quantas cartas você quer jogar?"));
    }
    //Caso o número de cartas seja válido (números pares entre 4 e 14), inserir as cartas viradas pra baixo com distribuição aleatória
    const elementoMain = document.querySelector("main");
    for(let i = 0; i < 2; i++){
        let cartasSelecionadas = nomesDosGifs.slice(0,numeroDeCartas/2).sort(comparador);
        for(let j = 0; j < numeroDeCartas/2; j++){
            elementoMain.innerHTML = elementoMain.innerHTML + 
            `<div class="card" onclick="clicarNaCarta(this)">
                <div class="front-face face">
                    <img alt="papagaio estático" src="./imagens/back.png">
                </div>
                <div class="back-face face">
                    <img alt="Gif de papagaio" src="./imagens/${cartasSelecionadas[j]}.gif">
                </div>
            </div>`;
        }
    }
}
distribuirCartas();
function comparador(){
    return Math.random() - 0.5;
}
function clicarNaCarta(cartaSelecionada){
    // Virar a carta selecionada, trazendo a propriedade transform: rotateY para dentro do Javascript
    elementoDivFaceDaFrente[clicks] = cartaSelecionada.querySelector(".front-face");
    elementoDivFaceDeTrás[clicks] = cartaSelecionada.querySelector(".back-face");
    elementoDivFaceDeTrás[clicks].style.transform = "rotateY(0deg)";
    elementoDivFaceDaFrente[clicks].style.transform ="rotateY(-180deg)";
    // Guardar o valor do atributo src da imagem da face de trás da carta selecionada
    srcImgFaceDeTras[clicks] = cartaSelecionada.querySelector(".back-face img").src;
    // Incrementar a variável global clicks a cada vez que uma carta é selecionada
    clicks++;
    // Se a segunda carta virada for diferente da primeira, aguardar 1 seg e virar as cartas para baixo novamente
    if(clicks % 2 === 0 && srcImgFaceDeTras[clicks-1]!== srcImgFaceDeTras[clicks-2]){
        setTimeout(() => {
            elementoDivFaceDaFrente[clicks-1].style.transform ="rotateY(0deg)";
            elementoDivFaceDeTrás[clicks-1].style.transform = "rotateY(180deg)";
            elementoDivFaceDaFrente[clicks-2].style.transform ="rotateY(0deg)";
            elementoDivFaceDeTrás[clicks-2].style.transform = "rotateY(180deg)";
        }, 1000);
    }else if(clicks % 2 === 0){
        contadorCartasCorretas = contadorCartasCorretas + 2;
    }
        if(contadorCartasCorretas === numeroDeCartas){
            alert("Você ganhou em "+clicks+" jogadas!");
        }
}
