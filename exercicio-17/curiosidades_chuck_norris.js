// /* Atividade Chuck Norris */

// //O array curisiodades_chick_norris armazena fatos curiosos sobre Chuck Norris
// var curiosidades_chuck_norris = [
//     { titulo: "Cuidados com a higiene bucal", conteudo: "Chuck Norris usa arame farpado como fio dental." },
//     { titulo: "Fórmula para maratonar séries", conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos." },
//     { titulo: "Suicida que não morre", conteudo: "Chuck Norris foi homem-bomba 34 vezes." },
//     { titulo: "Olhos que tudo veem", conteudo: "Chuck Norris já viu o homem invisível." },
//     { titulo: "Manipulando o tempo", conteudo: "Chuck Norris não usa relógio. Ele decide que horas são." },
//     { titulo: "Praticando esportes radicais", conteudo: "Chuck Norris faz bungee jump sem corda." },
//     { titulo: "Não vale chorar", conteudo: "Chuck Norris faz cebolas chorarem." },
//     { titulo: "Tempero de fogo", conteudo: "Chuck Norris usa pólvora como tempero." },
//     { titulo: "Extinção dos dinossauros", conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma." },
//     { titulo: "Contando sem parar", conteudo: "Chuck Norris contou até o infinito. Duas vezes." }
// ];

// //Obtendo o total de objetos da coleção e armazenamos na váriavel tamanho_colecao
// let tamanho_colecao = curiosidades_chuck_norris.length;

// //A função Math.random() vai retornar um número que seja maior ou igual a zero e também menor que 1
// //O resultado de Math.random() é multiplicado pelo tamanho da coleção
// //A função Math.floor() vai arredondar o número para o menor número inteiro mais próximo 
// //O resultado é armazenado na variável numero_sorteado
// //Dessa forma, temos um número aleatório que pode ser um valor entre 0 e 9
// let numero_sorteado = Math.floor(Math.random() * tamanho_colecao);

// //A váriavel numero_sorteado é utilizada como índice na coleção, o que nos permite acessar um objeto dentro do array
// let curiosidade_escolhida = curiosidades_chuck_norris[numero_sorteado];

// let titulo_curiosidade = curiosidade_escolhida.titulo;
// let conteudo_curiosidade = curiosidade_escolhida.conteudo;

// //No final são impressos fatos curiosos sobre Chuck Norris
// console.log("CURIOSIDADE SOBRE CHUCK NORRIS");
// console.log("Título: "+titulo_curiosidade);
// console.log("Conteúdo: "+conteudo_curiosidade);

var numero1 = 5;
var numero2 = 3;
var numero3 = 10;

var resultado = numero3 * (numero1 - numero2);
console.log(resultado++);