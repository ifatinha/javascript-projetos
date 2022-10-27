//Calculadora com 4 operações basicas

let numero1 = parseFloat(window.prompt("Digite um número: "));
let numero2 = parseFloat(window.prompt("Digite outro número: "));

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

let soma = numero1 + numero2;
let diferenca = numero2 - numero1;
let produto = numero1 * numero2;
let divisao = (numero2 / numero1).toFixed(2);

console.log(numero1 + " + " + numero2 + " = " + soma);
console.log(numero2 + " - " + numero1 + " = " + diferenca);
console.log(numero1 + " * " + numero2 + " = " + produto);
console.log(numero2 + " / " + numero1 + " = " + divisao);
