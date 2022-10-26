import entradaDados from 'readline-sync';

let personagem1 = entradaDados.question("Personagem de ataque: ");
let poderAtaque = entradaDados.question("Poder de ataque: ");

let personagem2 = entradaDados.question("Personagem de defesa: ");
let vidas = entradaDados.question("Vidas disponiveis: ");
let poderDefesa = entradaDados.question("Poder de defesa: ");
let possuiEscudo = entradaDados.question("Possui escudo: ");

let escudo = false;
poderAtaque = parseInt(poderAtaque);
poderDefesa = parseInt(poderDefesa);

if (possuiEscudo == "sim" || possuiEscudo == "Sim" || possuiEscudo == "SIM") {
    escudo = true;
}

let danos = 0;

if (poderAtaque > poderDefesa && escudo == false) {
    danos = poderAtaque - poderDefesa;
} else if (poderAtaque > poderDefesa && escudo == true) {
    danos = (poderAtaque - poderDefesa) / 2;
}

vidas = vidas - danos;

console.log(personagem1 + " causou " + danos + " pontos de dano em " + personagem2);

console.log("\nAtacante: " + personagem1);
console.log("Poder de ataque: " + poderAtaque);
console.log("\n");

console.log("Defensor: " + personagem2);
console.log("Pode de defesa: " + poderDefesa);
console.log("Vidas disponiveis: " + vidas);
console.log("Danos: " + danos);
