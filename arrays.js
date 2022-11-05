import scanner from 'readline-sync';

let nome = scanner.question("Digite seu nome: ");
let mensagem = "";

try {
    if (nome == "") {
        throw "Vazia";
    }

    if (isNaN(nome)) {
        throw "Não é um número!";
    }

    nome = Number(nome);

    if(nome < 5){
        throw "Muito baixo";
    }

    if(nome > 10){
        throw "Muito alto";
    }
} catch (error) {
    mensagem = "Entrada é " + error;
}

console.log(mensagem);