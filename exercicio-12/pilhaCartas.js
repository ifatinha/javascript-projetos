/**
 * ## Pilha de Cartas
 * Escreva um programa em javascript para simular um baralho de cartas. 
 * O programa deve iniciar mostrando na tela um menu interativo contendo 
 * a quantidade de cartas que estão atualmente no baralho e as opções de 
 * “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, 
 * o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. 
 * Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho 
 * e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher 
 * a opção de “Sair”, caso contrário deve voltar ao menu.
 */

import scanner from 'readline-sync';

let opcao = "";
let baralho = [];

do {

    if (baralho.length == 0) {
        console.log("O baralho tem " + baralho.length + " cartas.");
        console.log("1 - Adicionar carta");
        console.log("3 - Sair");
    } else {
        console.log("O baralho tem " + baralho.length + " cartas.");
        for (let i = 0; i < baralho.length; i++) {
            console.log(i + "º " + baralho[i]);
        }
        console.log("1 - Adicionar carta");
        console.log("2 - Puxar uma carta");
        console.log("3 - Sair");
    }

    opcao = scanner.question("Sua escolha: ");

    switch (opcao) {
        case "1":
            let carta = scanner.question("Qual carta você quer adicionar ao baralho? ");
            baralho.unshift(carta);
            console.log("Carta " + carta + " adicionada ao baralho!!");
            break;
        case "2":
            console.log("Puxando carta " + baralho[baralho.length - 1] + " do baralho!!");
            let cartaPuxada = baralho.shift();
            console.log("Carta " + cartaPuxada + " puxada com sucesso!!");
            break;
        case "3":
            console.log("Encerrando aplicação!!!");
            break;
        default:
            console.log("Opção inválida!!");
            break;
    }

} while (opcao != "3");