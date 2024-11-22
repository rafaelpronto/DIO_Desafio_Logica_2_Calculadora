let nomeDoHeroi = 'Felipão';
let vitorias = 57;
let derrotas = 32;

console.log('');
console.log('###### Calculadora de Partidas Rankeadas ######');
console.log('');
console.log('Seja Bem Vindo(a) ao Segundo Desafio do Felipão.');
console.log('');

function calcRank(vit, der){
    return vit - der;
}

saldo = calcRank(vitorias, derrotas);

if (saldo < 10) {
    classificacao = "Ferro";
} else if (saldo > 11 && saldo < 20) {
    classificacao = "Bronze";
} else if (saldo > 21 && saldo < 50) {
    classificacao = "Prata";
} else if (saldo > 51 && saldo < 80) {
    classificacao = "Ouro";
} else if (saldo > 81 && saldo < 90) {
    classificacao = "Diamante";
} else if (saldo > 91 && saldo < 100) {
    classificacao = "Lendário";
} else {
    classificacao = "Imortal";
}

console.log(`O Herói ${nomeDoHeroi} obteve ${vitorias} vitórias e ${derrotas} derrotas.`);
console.log(`Com o saldo de ${saldo}, está na classificação **${classificacao}**.`);



