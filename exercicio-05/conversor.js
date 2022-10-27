/**Receba um valor em metros e escolha para unidade de medida 
 * deseja converter esse valor
 */
import entradaDados from 'readline-sync';

let valorEmMetros = entradaDados.question("Metros: ");
valorEmMetros = parseFloat(valorEmMetros);
let resultado = 0.0;

console.log("Conversor de Medidas:");
console.log("1. Milímetro - mm");
console.log("2. Centimetro - cm");
console.log("3. Decímetro - dm");
console.log("4. Decâmetro - dam");
console.log("5. Hectômetro - hm");
console.log("6. Quilômetro - km");
let opcao = entradaDados.question("Opcao: ");
opcao = parseInt(opcao);

switch (opcao) {
    case 1:
        console.log("Convertendo valor para milímetro......\n");
        resultado = valorEmMetros * 1000;
        console.log(valorEmMetros + "m equivale a " + resultado + "mm.")
        break;

    case 2:
        console.log("Convertendo valor para centimetros......\n");
        resultado = valorEmMetros * 100;
        console.log(valorEmMetros + "m equivale a " + resultado + "cm.")
        break;

    case 3:
        console.log("Convertendo valor para decímetro......\n");
        resultado = valorEmMetros * 10;
        console.log(valorEmMetros + "m equivale a " + resultado + "dm.")
        break;

    case 4:
        console.log("Convertendo valor para decâmetro......\n");
        resultado = valorEmMetros / 10;
        console.log(valorEmMetros + "m equivale a " + resultado.toFixed(2) + "dam.")
        break;

    case 5:
        console.log("Convertendo valor para hectômetro......\n");
        resultado = valorEmMetros / 100;
        console.log(valorEmMetros + "m equivale a " + resultado + "hm.")
        break;

    case 6:
        console.log("Convertendo valor para quilômetros......\n");
        resultado = valorEmMetros / 1000;
        console.log(valorEmMetros + "m equivale a " + resultado + "km.")
        break;

    default:
        console.log("Opção inválida....");
        break;
}
