/**
 * Recebe o nome de um turista e pergunte se ele ja visitou alguma cidade
 * e armazene essas informações em uma variavel, no final da aplicação
 * mostre quantas cidades esse turista visitou bem como o nome de cada 
 * cidade
 */

import input from 'readline-sync';

let turista = input.question("E ai turista, qual o seu nome? ");
let resposta = input.question("Voce ja visitou alguma cidade? (Sim/Nao)");
let cidades = [];
let contador = 0;

while (resposta == "sim" || resposta == "Sim" || resposta == "SIM") {
    let cidade = input.question("Qual e o nome da cidade visitada? ");
    cidades[contador] = cidade;
    contador++;
    resposta = input.question("Voce visitou alguma outra cidade? (Sim/Nao)");
}

if (cidades.length < 0) {
    console.log(turista + " você não visitou nenhuma cidade");
} else {
    console.log(turista + " você visitou " + cidades.length + " cidade(s)");
    contador = 0;
    while (contador < cidades.length) {
        console.log(cidades[contador]);
        contador++;
    }
}
