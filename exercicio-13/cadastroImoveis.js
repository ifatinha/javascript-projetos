/**
 * ## Cadastro de Imóveis

Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.
- O menu também deve ter a opção de mostrar todos os imóveis salvos.
 */

import scanner from 'readline-sync';

let opcao = "";
let imoveis = [];

do {
    console.log("1 - Cadastrar novo imóvel");
    console.log("2 - Consultar imóveis cadastrados");
    console.log("3 - Sair");
    opcao = scanner.question("Opcao: ");

    switch (opcao) {
        case "1":
            let imovel = {};
            imovel.proprietario = scanner.question("Nome do proprietario: ");;
            imovel.numeroQuartos = parseInt(scanner.question("Numero de quartos: "));;
            imovel.numeroBanheiros = parseInt(scanner.question("Numero de Banheiros: "));;
            imovel.possuiGaragem = scanner.question("Possui Garagem? (Sim/Nao) ");;
            imoveis.unshift(imovel);
            console.log("Imovel cadastrado com sucesso!!!");
            break;

        case "2":
            if (imoveis.length == 0) {
                console.log("Nenhum imóvel cadastrado!!!");
            } else {
                console.log("Listando imóveis cadastrados");
                for (let i of imoveis) {
                    console.log("Proprietario: " + i.proprietario);
                    console.log("Numero de quartos: " + i.numeroQuartos);
                    console.log("Numero de Banheiros: " + i.numeroBanheiros);
                    console.log("Tem garagem? " + i.possuiGaragem);
                }
            }
            break;

        case "3":
            console.log("Encerrando aplicação!!!");
            break;

        default:
            console.log("Opção inválida!!!");
            break;
    }
} while (opcao != "3");

