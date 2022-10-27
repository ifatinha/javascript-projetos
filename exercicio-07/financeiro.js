/**
 * receba o nome de um cliente e o saldo inicial de sua conta e em seguida
 * apresente um menu perguntando se o cliente gostaria de sacar ou depositar
 * um novo valor ao saldo inicial;
 */

import input from 'readline-sync';

let cliente = input.question("Nome completo: ");
let saldo = input.question("Saldo inicial: ");
saldo = parseFloat(saldo);
let opcao = "";
let valor = 0.0;

do {
    console.log("1 - Depositar");
    console.log("2 - Sacar");
    console.log("3 - Consultar saldo");
    console.log("4 - Sair");
    opcao = input.question("Opcao: ");

    switch (opcao) {

        case "1":
            valor = input.question("Quando deseja depositar? ");
            valor = parseFloat(valor);
            console.log("Depositando..............");
            saldo += valor;
            break;

        case "2":
            valor = input.question("Quanto deseja sacar? ");
            valor = parseFloat(valor);
            console.log("Sacando..............");
            saldo -= valor;
            break;

        case "3":
            console.log("Consultando saldo......");
            console.log("Saldo disponivel: " + parseFloat(saldo).toFixed(2));
            break;

        case "4":
            console.log("Encerrando aplicação....");
            break;

        default:
            console.log("Opção inválida!");
            break;
    }
} while (opcao != "4");

console.log("Cliente:".padEnd(20, ".") + " " + cliente);
console.log("Saldo:".padEnd(20, ".") + "R$ " + saldo + ",00");