/**
 * Construa uma aplicação que faz a comparação entre salário e inflação
 * 
 * npm init -y 
 * npm install readline-sync 
 * "type": "module" no arquivo package.json
*/

import input from 'readline-sync';

console.log("Escolha uma das opções abaixo:");
console.log("1 - Listar os sálarios minímos de 2010 à 2022");
console.log("2 - Listar o Índice IPCA de 2010 à 2022");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");

let opcao = input.question("Digite um numero de sua escolha: ");
opcao = parseInt(opcao);

let salarios_ano = [
    { ano: 2010, salario: 510.00 },
    { ano: 2011, salario: 545.00 },
    { ano: 2012, salario: 622.00 },
    { ano: 2013, salario: 678.00 },
    { ano: 2014, salario: 724.00 },
    { ano: 2015, salario: 788.00 },
    { ano: 2016, salario: 880.00 },
    { ano: 2017, salario: 937.00 },
    { ano: 2018, salario: 954.00 },
    { ano: 2019, salario: 998.00 },
    { ano: 2020, salario: 1045.00 },
    { ano: 2021, salario: 1100.00 },
    { ano: 2022, salario: 1212.00 }
];

let inflacoes = [
    { ano: 2010, ipca: 5.91 },
    { ano: 2011, ipca: 6.5 },
    { ano: 2012, ipca: 5.84 },
    { ano: 2013, ipca: 5.91 },
    { ano: 2014, ipca: 6.41 },
    { ano: 2015, ipca: 10.97 },
    { ano: 2016, ipca: 6.26 },
    { ano: 2017, ipca: 2.95 },
    { ano: 2018, ipca: 3.75 },
    { ano: 2019, ipca: 4.31 },
    { ano: 2020, ipca: 4.52 },
    { ano: 2021, ipca: 10.6 },
    { ano: 2022, ipca: 4.09 }
];

switch (opcao) {
    case 1:
        console.log("\nTodos os sálarios minímos de 2010 à 2022\n");
        for (let salario of salarios_ano) {
            console.log("Ano: ".padEnd(30, ".") + salario.ano);
            console.log("Salário Mínimo: ".padEnd(30, ".") + "R$ " + salario.salario.toFixed(2).replace(".", ","));
            console.log("\n");
        }
        break;

    case 2:
        console.log("Todos os Índices de IPCA de 2010 à 2022\n");
        for (let inflacao of inflacoes) {
            let taxa_formatada = inflacao.ipca.toFixed(2).replace(".", ",");
            console.log("Ano: ".padEnd(30, ".") + inflacao.ano);
            console.log("Inflação IPCA: ".padEnd(30, ".") + taxa_formatada + "%");
            console.log("\n");
        }
        break;

    case 3:
        console.log("Comparação entre o percentual de aumento salarial e o IPCA\n");

        for (let index = 0; index < salarios_ano.length; index++) {

            let ano = salarios_ano[index].ano;
            let salario = salarios_ano[index].salario;
            let taxa_ipca = inflacoes[index].ipca;

            console.log("Ano: ".padEnd(40, ".") + ano);
            console.log("Sálario Mínimo: ".padEnd(40, ".") + "R$ " + salario + ",00");

            if (ano == 2010) {
                console.log("Crescimento Salarial: ".padEnd(40, ".") + "-");
            } else {
                let salario_proximo_ano;
                let percentual_aumento;

                if (index < salarios_ano.length - 1) {
                    salario_proximo_ano = salarios_ano[index + 1].salario;
                    percentual_aumento = calcularPercentualAumento(salario_proximo_ano, salario);
                } else {
                    percentual_aumento = "-";
                }
                console.log("Crescimento Salarial: ".padEnd(40, ".") + percentual_aumento + "%");
            };

            console.log("Inflação IPCA: ".padEnd(40, ".") + taxa_ipca + "%");
            console.log("\n");
        }
        break;

    default:
        console.log("Opção inválida.");
        break;
}

function calcularPercentualAumento(salario_ano, salario_anterior) {
    let valor_aumento = salario_ano - salario_anterior;
    let percentual_aumento = (valor_aumento / salario_anterior);
    let aumento_final = percentual_aumento * 100;

    return aumento_final.toFixed(2);
}