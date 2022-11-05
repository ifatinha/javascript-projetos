import scanner from 'readline-sync';

executar();

/**
 * Funções do programa
 * 
 * */
function exibirMenu() {
    console.log("Calculadora Geométrica");
    console.log("Escolha uma das opções abaixo");
    console.log("1 - Área do triângulo");
    console.log("2 - Área do retângulo");
    console.log("3 - Área do quadrado");
    console.log("4 - Área do trapézio");
    console.log("5 - Área do círculo");
    console.log("6 - Sair");
    let opcao = scanner.question("Opcao: ");
    return opcao;
}

function executar() {
    let opcao = "";
    do {
        opcao = exibirMenu();
        const PI = 3.14;
        let resultado = 0.0;
        console.clear();
        switch (opcao) {

            case "1":
                console.log("Calculando área do triângulo...");
                resultado = areaTriangulo(base);
                console.log("Área do triângulo: " + resultado.toFixed(2));
                break
            case "2":
                console.log("Calculando área do retangulo...");
                resultado = areaRetangulo();
                console.log("Área do retângulo: " + resultado.toFixed(2));
                break
            case "3":
                console.log("Calculando área do quadrado...");
                resultado = areaQuadrado();
                console.log("Área do quadrado: " + resultado.toFixed(2));
                break
            case "4":
                console.log("Calculando área do trapézio...");
                resultado = areaTrapezio();
                console.log("Área do trapézio: " + resultado.toFixed(2));
                break
            case "5":
                console.log("Calculando area do circulo....");
                resultado = areaCirculo(PI);
                console.log("Área do circulo: " + resultado.toFixed(2));
                break
            case "6":
                console.log("Encerrando aplicação.....");
                break
            default:
                console.log("Opção inválida!!!");
                break
        }

    } while (opcao !== "6");
}

function areaTriangulo() {
    let base = parseFloat(scanner.question("Base do triangulo: "));
    let altura = parseFloat(scanner.question("Altura do triangulo: "));
    return (base * altura) / 2;
}

function areaRetangulo() {
    let base = parseFloat(scanner.question("Base do retângulo: "));
    let altura = parseFloat(scanner.question("Altura do retângulo: "));
    return (base * altura);
}

function areaQuadrado() {
    let lado = parseFloat(scanner.question("Lado do quadrado: "));
    return (lado * lado);
}

function areaTrapezio() {
    let base_maior = parseFloat(scanner.question("Base maior do trapézio: "));
    let base_menor = parseFloat(scanner.question("Base menor do trapézio: "));
    let altura = parseFloat(scanner.question("Altura do trapézio: "));
    return (((base_maior + base_menor) * altura) / 2);
}

function areaCirculo(valorPi) {
    let raio = parseFloat(scanner.question("Raio do circulo: "));
    return (valorPi * (Math.pow(raio, 2)));
}