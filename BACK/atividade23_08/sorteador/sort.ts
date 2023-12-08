const entrada7 = require("readline-sync");

let posicoesValidas1 = ['goleiro', 'zagueiro', 'lateral', 'volante', 'meia', 'atacante']

class atleta{
    nome_jog:string [] = []
    nivel_jog: number [] = []
    posicao_jog: string [] = []

    constructor(nome_jog: string [], nivel_jog: number [], posicao_jog: string []){
        this.nome_jog = entrada7.question('Nome do jogador: ');
        this.nivel_jog = (entrada7.question('Nivel do jogador (1 a 5): '));
        this.posicao_jog = entrada7.question('Posicao do jogador: ').toLowerCase();
    }
}

let sofa = new atleta("scd", 1, "scd")
let sn: string = "s";
while(sn != "n"){

console.log("========================================")
    this.nome_jog = entrada7.question('Nome do jogador: ');
    nivel_jog = (entrada7.question('Nivel do jogador (1 a 5): '));
    posicao_jog = entrada7.question('Posicao do jogador: ').toLowerCase();
    while (!posicoesValidas.includes(posicao_jog)) {
        console.log('Posicao invalida. Posisoes validas: ' + posicoesValidas.join(', '));
        posicao_jog = entrada7.question('Posicao do jogador: ').toLowerCase();
    }
    sn = entrada7.question("quer add outro jogador s/n: ")
    console.log("========================================")
}