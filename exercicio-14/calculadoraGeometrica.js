import scanner from 'readline-sync';

let opcao = "";

do {
    console.log("Calculadora Geométrica");
    console.log("Escolha uma das opções abaixo");
    console.log("1 - Área do triângulo");
    console.log("2 - Área do retângulo");
    console.log("3 - Área do quadrado");
    console.log("4 - Área do trapézio");
    console.log("5 - Área do círculo");
    console.log("6 - Sair");
    opcao = scanner.question("Opcao: ");

    let base = 0.0;
    let altura = 0.0;
    const PI = 3.14;
    let resultado = 0.0;
    console.clear();
    switch (opcao) {

        case "1":
            base = parseFloat(scanner.question("Base do triangulo: "));
            altura = parseFloat(scanner.question("Altura do triangulo: "));
            console.log("Calculando área do triângulo...");
            resultado = areaTriangulo(base, altura);
            console.log("Área do triângulo: " + resultado.toFixed(2));
            break
        case "2":
            base = parseFloat(scanner.question("Base do retângulo: "));
            altura = parseFloat(scanner.question("Altura do retângulo: "));
            console.log("Calculando área do retangulo...");
            resultado = areaRetangulo(base, altura);
            console.log("Área do retângulo: " + resultado.toFixed(2));
            break
        case "3":
            let lado = parseFloat(scanner.question("Lado do quadrado: "));
            console.log("Calculando área do quadrado...");
            resultado = areaQuadrado(lado, lado);
            console.log("Área do quadrado: " + resultado.toFixed(2));
            break
        case "4":
            let base_maior = parseFloat(scanner.question("Base maior do trapézio: "));
            let base_menor = parseFloat(scanner.question("Base menor do trapézio: "));
            altura = parseFloat(scanner.question("Altura do trapézio: "));
            console.log("Calculando área do trapézio...");
            resultado = areaTrapezio(base_maior, base_menor, altura);
            console.log("Área do trapézio: " + resultado.toFixed(2));
            break
        case "5":
            let raio = parseFloat(scanner.question("Raio do circulo: "));
            console.log("Calculando area do circulo....");
            resultado = areaCirculo(PI, raio);
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

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function areaRetangulo(base, altura) {
    return (base * altura);
}

function areaQuadrado(lado) {
    return areaRetangulo(lado, lado);
}

function areaTrapezio(base_maior, base_menor, altura) {
    return (((base_maior + base_menor) * altura) / 2);
}

function areaCirculo(valorPi, raio) {
    return (valorPi * (Math.pow(raio, 2)));
}