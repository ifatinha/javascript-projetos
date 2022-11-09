import scanner from 'readline-sync'
const vagas = [];

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
    do {
        opcao = exibirMenu();
        console.clear();

        switch (opcao) {
            case "1":
                listarVagas();
                break;

            case "2":
                criarVaga();
                break;

            case "3":
                mostrarVaga();
                break;

            case "4":
                inscreverCandidato();
                break;

            case "5":
                removerVaga();
                break;

            case "6":
                console.log("Encerrando aplicação!");
                break;

            default:
                console.log("Opção inválida!");
        }
    } while (opcao !== "6")
}

function listarVagas() {
    if (vagas.length > 0) {
        console.log("Vagas Disponiveis");
        const txt = vagas.reduce(function (txtAux, vaga) {
            txtAux += vaga.codigo + ". " + vaga.nome +
                " ( " + vaga.candidatos.length + " candidatos )\n";
            return txtAux;
        }, "");
        console.log(txt);
    } else {
        console.log("Nenhuma vaga disponivel!");
    }
}

function criarVaga() {
    const vaga = {};

    vaga.codigo = scanner.question("Codigo: ");
    vaga.nome = scanner.question("Nome: ");
    vaga.descricao = scanner.question("Descricao: ");
    vaga.dataLimite = scanner.question("Ate quando a vaga vai ficar disponivel? (dd/mm/yyyy): ");
    vaga.candidatos = [];

    console.clear();
    exibirDetalhesVaga(vaga);

    let resposta = scanner.question("Deseja criar uma vaga com essas informações? S/N ");

    if (resposta === "S") {
        vagas.push(vaga);
        console.log("Vaga criada!!");
    } else {
        console.log("Operação cancelada!!!");
    }
}

function mostrarVaga() {
    let codigo = scanner.question("Codigo da vaga: ");
    let posicao = buscarVaga(codigo, vagas);

    if (posicao) {
        let vaga = vagas[posicao];
        exibirDetalhesVaga(vaga);
    } else {
        console.log("Nenhuma vaga encontrada!");
    }
}

function buscarVaga(codigo) {
    let posicao;
    for (let index in vagas) {
        if (vagas[index].codigo === codigo) {
            posicao = index;
        }
    }

    return posicao;
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

function inscreverCandidato() {
    let candidato = scanner.question("Nome do Candidato: ");
    let codigoVaga = scanner.question("Codigo da vaga: ");

    let posicao = buscarVaga(codigoVaga, vagas);

    if (posicao) {
        console.clear();
        let resposta = scanner.question("Deseja inscrever o candidato " + candidato + " na vaga " +
            vagas[posicao].nome + "? S/N ");

        if (resposta === "S") {
            vagas[posicao].candidatos.push(candidato);
            console.log("Dados salvos!");
        } else {
            console.log("Operação cancelada!");
        }
        
    } else {
        console.log("Nenhuma vaga encontrada!");
    }
}

function removerVaga() {
    let codigoVaga = scanner.question("Codigo da vaga: ");
    let posicao = buscarVaga(codigoVaga, vagas);

    if (posicao) {
        exibirDetalhesVaga(vagas[posicao]);
        let resposta = scanner.question("Excluir vaga? S/N ");
        if (resposta === "S") {
            vagas.splice(posicao, 1);
            console.log("Vaga excluida!");
        } else {
            console.log("Operação cancelada!");
        }
    } else {
        console.log("Nenhuma vaga encontrada!");
    }
}

executar();