/* npm init -y */
/* npm install readline-sync */

/* Construa uma aplicação que calcula os juros de uma dívida em atraso */
import entradaDados from 'readline-sync';

console.log("Aplicação de Juros: \n");

let valorDivida = entradaDados.question("Informe o valor devido: ");

if (valorDivida > 0) {
    let diasAtraso = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ");
    if (diasAtraso > 0) {
        let juros;

        if (parseInt(diasAtraso) <= 15) {
            juros = 5;
        } else {
            juros = 10;
        }

        let valorJuros = (parseFloat(valorDivida) * juros) / 100;
        let totalDivida = parseFloat(valorDivida) + parseInt(valorJuros);

        console.log("\nValor original da dívida: R$" + valorDivida);
        console.log("Dias atrasados: " + diasAtraso);
        console.log("Taxa de Juros: " + juros + "%");
        console.log("Valor total com juros: R$" + totalDivida);
    }else{
        console.log("Você está em dias.");
    }
} else {
    console.log("O valor da divida deve ser maior que 0");
}