"use strict";
const entrada = require('readline-sync');
const jogadores = [];
function adicionarJogador() {
    const nome = entrada.question('Nome do jogador: ');
    const nivel = parseInt(entrada.question('Nível do jogador: '));
    const posicao = entrada.question('Posição do jogador: ');
    const jogador = { nome, nivel, posicao };
    jogadores.push(jogador);
    const resposta = entrada.question('Deseja adicionar outro jogador? (S/N): ');
    if (resposta.toLowerCase() === 's') {
        adicionarJogador();
    }
    else {
        const { timeA, timeB } = sortearTimes(jogadores);
        console.log('\nTime A:');
        console.log(timeA);
        console.log('\nTime B:');
        console.log(timeB);
    }
}
function sortearTimes(jogadores) {
    // Implemente a função sortearTimes aqui, como mencionado no exemplo anterior
}
adicionarJogador();
