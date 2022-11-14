const chuvaDeMeteoros = [
    { nome: 'Alfa Centaurídeos', declinacao: -59 },
    { nome: 'Gama Normídeos', declinacao: -50 },
    { nome: 'Pi Pupídeos', declinacao: -45 },
    { nome: 'Líridas', declinacao: 34 },
    { nome: 'Eta Aquáridas', declinacao: -1 },
    { nome: 'Eta Líridas', declinacao: 44 },
    { nome: 'Bootídeos de Junho', declinacao: 48 },
    { nome: 'Alfa Capricornídeos', declinacao: -10 },
    { nome: 'Delta Aquáridas do Sul', declinacao: -16 },
    { nome: 'Piscis Austrinídeos', declinacao: -30 },
    { nome: 'Perseidas', declinacao: 58 },
];

const chuvasNorte = chuvaDeMeteoros.filter((chuva) => { return chuva.declinacao >= 0 });
const chuvasSul = chuvaDeMeteoros.filter((chuva) => { return chuva.declinacao < 0 });

function imprimirChuvas(chuva) {
    console.log(chuva.nome + " - declinação: " + chuva.declinacao);
}

console.log("Chuvas no hemisfério norte");
chuvasNorte.sort((chuva1, chuva2) => { return chuva1.declinacao - chuva2.declinacao });
chuvasNorte.forEach(imprimirChuvas);

console.log("\nChuvas no hemisfério sul");
chuvasSul.sort((chuva1, chuva2) => { return chuva1.declinacao - chuva2.declinacao });
chuvasSul.forEach(imprimirChuvas);