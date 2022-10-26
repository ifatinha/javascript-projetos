/* npm init -y
   npm install readline-sync 
   "type": "module",
*/
// import entradaDados from 'readline-sync';

let nome = window.prompt("Primeiro Nome: ");
let sobrenome = window.prompt("Sobrenome: ");
let campoEstudo = window.prompt("Campo de estudo: ");
let anoNascimento = window.prompt("Ano de Nascimento: ");
let anoAtual = 2022;

alert("Recruta cadastrado com sucesso.");

let idade = anoAtual - anoNascimento;
let nomeCompleto = nome + sobrenome;

console.log("Nome: " + nomeCompleto);
console.log("Campo de Estudo: " + campoEstudo);
console.log("Idade: " + idade);
