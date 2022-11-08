import scanner from 'readline-sync'

// executar();

function exibirMenu() {
    console.log("1 - Vagas disponiveis");
    console.log("2 - Criar nova vaga");
    console.log("3 - Visualizar vaga");
    console.log("4 - Inscrever candidato");
    console.log("5 - Excluir vaga");
    console.log("6 - Sair");
    let opcao = scanner.question("Opcao: ");
    return opcao;
}

function executar() {
    let opcao = "";
    const vagas = [];

    do {
        opcao = exibirMenu();
        console.clear();

        switch (opcao) {
            case "1":
                listarVagas(vagas);
                break;

            case "2":
                vagas.push(criarVaga());
                break;

            case "3":
                mostrarVaga(vagas);
                break;

            case "4":
                inscreverCandidato(vagas);
                break;

            case "5":
                console.log("Excluir vaga");
                break;

            case "6":
                console.log("Encerrando aplicação!");
                break;

            default:
                console.log("Opção inválida!");
                break;
        }
    } while (opcao !== "6")
}

function listarVagas(vagas) {
    if (vagas.length > 0) {
        console.log("Vagas Disponiveis");
        vagas.forEach(function (vaga, index) {
            console.log("Codigo".padEnd(30, ".") + ": " + vaga.codigo);
            console.log("Vaga".padEnd(30, ".") + ": " + vaga.nome);
            console.log("Aberto até".padEnd(30, ".") + ": " + vaga.dataLimite);
            console.log("Número de inscritos".padEnd(30, ".") + ": " + vaga.candidatos.length);
        })
    } else {
        console.log("Nenhuma vaga disponivel!");
    }
}

function criarVaga() {
    const vaga = {};
    vaga.codigo = scanner.question("Codigo: ");
    vaga.nome = scanner.question("Nome: ");
    vaga.descricao = scanner.question("Descricao: ");
    vaga.dataLimite = scanner.question("Ate quando a vaga vai ficar disponivel? ");
    vaga.candidatos = [];

    return vaga;
}

function mostrarVaga(vagas) {
    let codigo = scanner.question("Codigo da vaga: ");
    let vaga = buscarVaga(codigo, vagas);

    if (vaga.codigo) {
        exibirDetalhesVaga(vaga);
    } else {
        console.log("Nenhuma vaga encontrada!");
    }
}

function buscarVaga(codigo, vagas) {
    let aux = {};
    //retornar o indice ao inves do objeto
    for (let vaga of vagas) {
        if (vaga.codigo === codigo) {
            aux = vaga;
        }
    }

    return aux;
}

function exibirDetalhesVaga(vaga) {
    console.log("Dados da Vaga");
    console.log("Codigo: ".padEnd(30, ".") + ": " + vaga.codigo);
    console.log("Nome: ".padEnd(30, ".") + ": " + vaga.nome);
    console.log("Descrição: ".padEnd(30, ".") + ": " + vaga.descricao);
    console.log("Aberto até: ".padEnd(30, ".") + ": " + vaga.dataLimite);
    console.log("Número de candidatos: ".padEnd(30, ".") + ": " + vaga.candidatos.length);

    if (vaga.candidatos.length > 0) {
        console.log("Candidados inscritos");
        vaga.candidatos.forEach(function (candidato, index) {
            console.log("Nome: " + candidato);
        })
    }
}

function inscreverCandidato(vagas) {
    let candidato = scanner.question("Nome do Candidato: ");
    let codigoVaga = scanner.question("Codigo da vaga: ");

    let vaga = buscarVaga(codigoVaga, vagas);

    if (vaga.candidato) {

    }
}

executar();