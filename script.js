const nomesDosGifs = 
["bobrossparrot","bobrossparrot","explodyparrot","explodyparrot",
"fiestaparrot", "fiestaparrot", "metalparrot", "metalparrot",
"revertitparrot", "revertitparrot", "tripletsparrot", "tripletsparrot", 
"unicornparrot", "unicornparrot"];
function distribuirCartas(){
    //Perguntar para o usuário com quantas cartas ele quer jogar
    let numeroDeCartas = Number(prompt("Com quantas cartas você quer jogar?"));
    //Caso o número de cartas seja inválido, repetir o prompt em loop
    while(numeroDeCartas % 2 !== 0 || numeroDeCartas < 4 || numeroDeCartas > 14){
        alert("Número inválido. Por favor, digite um número par de 4 a 14");
        numeroDeCartas = Number(prompt("Com quantas cartas você quer jogar?"));
    }
    //Caso o número de cartas seja válido (números pares entre 4 e 14), inserir as cartas viradas pra baixo com distribuição aleatória
    nomesDosGifs.sort(comparador);
    const elementoMain = document.querySelector("main");
    for(let contador = 0; contador < numeroDeCartas; contador++){
        elementoMain.innerHTML = elementoMain.innerHTML + 
        `<div class="card">
            <div class="front-face face">
                <img alt="papagaio estático" src="./imagens/back.png">
            </div>
            <div class="back-face face">
                <img alt="Gif de papagaio" src="./imagens/${nomesDosGifs[contador]}.gif">
            </div>
        </div>`;
    }
}
distribuirCartas();
function comparador(){
    return Math.random() - 0.5;
}