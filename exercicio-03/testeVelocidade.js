//Receber os dados de 2 veiculos e verificar qual dos dois é mais rapido
import entradaDados from 'readline-sync';

let veiculo1 = entradaDados.question("Nome do Carro 01: ");
let velocidade1 = entradaDados.question("Velocidade do Carro 01: ");
let veiculo2 = entradaDados.question("Nome do Carro 02: ");
let velocidade2 = entradaDados.question("Velocidade do Carro 02: ");

if (velocidade1 > velocidadeCarro2) {
    console.log(veiculo1 + " é mais rápido que o " + veiculo2);
} else if (velocidade1 < velocidade2) {
    console.log(veiculo2 + " é mais rápido que o " + veiculo1);
} else {
    console.log(veiculo1 + " e " + veiculo2 + " tem a mesma velocidade");
}
