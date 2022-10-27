/**
 * Fila de Espera
 * Escreva um programa em javascript para simular uma fila de espera em um consultório médico. 
 * O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos 
 * os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). 
 * O menu também deve permitir escolher entre as opções de “Novo paciente”, 
 * para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, 
 * que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. 
 * O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
 * 
 */
import scanner from 'readline-sync';
const pacientes = [];
let opcao = "";

do {

    if (pacientes.length == 0) {
        console.log("Nenhuma paciente para atendimento!");
    } else {
        console.log("Pacientes aguardando atendimento");
        for (let i = 0; i < pacientes.length; i++) {
            console.log(i + "º " + pacientes[i]);
        }
    }

    console.log("Escolha uma das opções abaixo");
    console.log("1 - Novo paciente");
    console.log("2 - Consultar paciente");
    console.log("3 - Sair");
    opcao = scanner.question("Opcao: ");

    switch (opcao) {
        case "1":
            let novoPaciente = scanner.question("Nome do Paciente: ");
            console.log("Adicionando paciente " + novoPaciente + " a fila de espera!!!");
            pacientes.push(novoPaciente);
            console.log("O paciente " + novoPaciente + " foi adicionado a fila de espera!!!");
            break;
        case "2":
            console.log("Atendendo paciente " + pacientes[0] + "!!!");
            let pacienteAtendido = pacientes.shift();
            console.log("O paciente " + pacienteAtendido + " foi atendido com sucesso!!!");
            break;
        case "3":
            console.log("Encerrando aplicação!!!");
            break;
        default:
            console.log("Opção inválida!!!");
            break;
    }

} while (opcao != "3");
