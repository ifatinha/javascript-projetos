import input from 'readline-sync';

console.log("Olá, eu sou o robô de tabuada!");
let numero = parseInt(input.question("Digite o numero que voce deseja calcular a tabuada: "));
let resultado;


console.log("Tabuada do " + numero);

for (let contador = 0; contador <= 20; contador++) {
    resultado = numero * contador;
    console.log("--> " + numero + " X " + contador + " = " + resultado);
}