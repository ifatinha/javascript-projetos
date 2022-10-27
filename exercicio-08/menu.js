/**
 * faça uma aplicação simples que mostre um menu de informações 
 * e em seguida peça para o usuario escolher uma das opções e mostre
 * uma mensagem informando qual opção o usuário escolheu
 */
import input from 'readline-sync';

let opcao = "";

do {

    console.log("Seja bem-vindo");
    console.log("Escolha uma das opções abaixo.");
    console.log("1 - Somar");
    console.log("2 - Subtração");
    console.log("3 - Multiplicar");
    console.log("4 - Divisão");
    console.log("5 - Encerrar");

    opcao = input.question("Sua opcao: ");
    
    switch (opcao) {
        case "1":
            console.log("Somando números....");
            break;
        case "2":
            console.log("Subtraindo números....");
            break;
        case "3":
            console.log("Multiplicando números......");
            break;
        case "4":
            console.log("Dividindo números...........");
            break;
        case "5":
            console.log("Encerrando aplicação....");
            break;
        default:
            console.log("Opção inválida....");
            break;
    }
} while (opcao !== "5");