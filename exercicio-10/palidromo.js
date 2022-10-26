import scanner from 'readline-sync';

let palavra = scanner.question("Digite uma palavra: ");
let novaPalavra = "";
console.log("Verificando se " + palavra + " é palidromo");

for (let indice = palavra.length - 1; indice >= 0; indice--) {
    novaPalavra += palavra[indice];
}

if (palavra === novaPalavra) {
    console.log(palavra + " == " + novaPalavra + ", logo é palidromo.");
} else {
    console.log(palavra + " != " + novaPalavra + ", logo não é palidromo.");
}