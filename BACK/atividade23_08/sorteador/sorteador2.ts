const readlineSync = require('readline-sync');

// Lista de posições válidas no futebol brasileiro
const posicoesValidas = ['goleiro', 'zagueiro', 'lateral', 'volante', 'meia', 'atacante'];

interface Jogador {
    nome: string;
    nivel: number;
    posicao: string;
}

const jogadores: Jogador[] = [];

function adicionarJogador() {
    console.log("========================================")
    const nome = readlineSync.question('Nome do jogador: ');
    const nivel = parseInt(readlineSync.question('Nível do jogador (1 a 5): '));
    
    // Solicitar a posição e verificar se está na lista de posições válidas
    let posicao = readlineSync.question('Posição do jogador: ').toLowerCase();
    while (!posicoesValidas.includes(posicao)) {
        console.log('Posição inválida. Posições válidas: ' + posicoesValidas.join(', '));
        posicao = readlineSync.question('Posição do jogador: ').toLowerCase();
    }

    console.log("========================================")
    const jogador: Jogador = { nome, nivel, posicao };
    jogadores.push(jogador);
    
    const resposta = readlineSync.question('Deseja adicionar outro jogador? (S/N): ');
    if (resposta.toLowerCase() === 's') {
        adicionarJogador();
    } else {
        const { timeA, timeB } = organizarTimes(jogadores);
        console.log('\nTime A:');
        console.log(timeA);
        console.log('\nTime B:');
        console.log(timeB);
    }
}

function organizarTimes(jogadores: Jogador[]): { timeA: Jogador[]; timeB: Jogador[] } {
    // Filtrar jogadores por nível (1 a 5) e agrupá-los por posição
    const jogadoresFiltrados: { [posicao: string]: Jogador[] } = {};

    for (const posicao of posicoesValidas) {
        const jogadoresPosicao = jogadores.filter(jogador => jogador.posicao === posicao && jogador.nivel >= 1 && jogador.nivel <= 5);
        jogadoresFiltrados[posicao] = jogadoresPosicao;
    }

    // Distribuir jogadores de forma equilibrada nos times com base na média de nível
    const timeA: Jogador[] = [];
    const timeB: Jogador[] = [];

    const posicoes = Object.keys(jogadoresFiltrados);

    while (posicoes.length > 0) {
        const posicaoIndex = Math.floor(Math.random() * posicoes.length);
        const posicao = posicoes[posicaoIndex];

        const jogadoresPosicao = jogadoresFiltrados[posicao];
        if (jogadoresPosicao.length >= 2) {
            // Escolha dois jogadores aleatórios dessa posição
            const jogadorIndex1 = Math.floor(Math.random() * jogadoresPosicao.length);
            const jogador1 = jogadoresPosicao.splice(jogadorIndex1, 1)[0];
            const jogadorIndex2 = Math.floor(Math.random() * jogadoresPosicao.length);
            const jogador2 = jogadoresPosicao.splice(jogadorIndex2, 1)[0];

            // Distribua os jogadores entre os times de forma equilibrada
            if (somaNivel(timeA) + jogador1.nivel <= somaNivel(timeB) + jogador2.nivel) {
                timeA.push(jogador1);
                timeB.push(jogador2);
            } else {
                timeA.push(jogador2);
                timeB.push(jogador1);
            }
        } else {
            // Não há jogadores suficientes nessa posição, remova-a das escolhas
            posicoes.splice(posicaoIndex, 1);
        }
    }

    return { timeA, timeB };
}

function somaNivel(time: Jogador[]): number {
    return time.reduce((total, jogador) => total + jogador.nivel, 0);
}

adicionarJogador();
