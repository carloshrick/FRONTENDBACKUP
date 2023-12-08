var readlineSync = require('readline-sync');
// Lista de posições válidas no futebol brasileiro
var posicoesValidas = ['goleiro', 'zagueiro', 'lateral', 'volante', 'meia', 'atacante'];
var jogadores = [];
function adicionarJogador() {
    console.log("========================================");
    var nome = readlineSync.question('Nome do jogador: ');
    var nivel = parseInt(readlineSync.question('Nível do jogador (1 a 5): '));
    // Solicitar a posição e verificar se está na lista de posições válidas
    var posicao = readlineSync.question('Posição do jogador: ').toLowerCase();
    while (!posicoesValidas.includes(posicao)) {
        console.log('Posição inválida. Posições válidas: ' + posicoesValidas.join(', '));
        posicao = readlineSync.question('Posição do jogador: ').toLowerCase();
    }
    console.log("========================================");
    var jogador = { nome: nome, nivel: nivel, posicao: posicao };
    jogadores.push(jogador);
    var resposta = readlineSync.question('Deseja adicionar outro jogador? (S/N): ');
    if (resposta.toLowerCase() === 's') {
        adicionarJogador();
    }
    else {
        // Exibir todos os jogadores inseridos
        console.log('\nJogadores inseridos:');
        for (var _i = 0, jogadores_1 = jogadores; _i < jogadores_1.length; _i++) {
            var jogador_1 = jogadores_1[_i];
            console.log("Nome: ".concat(jogador_1.nome, ", N\u00EDvel: ").concat(jogador_1.nivel, ", Posi\u00E7\u00E3o: ").concat(jogador_1.posicao));
        }
        var _a = organizarTimes(jogadores), timeA = _a.timeA, timeB = _a.timeB;
        console.log('\nTime A:');
        console.log(timeA);
        console.log('\nTime B:');
        console.log(timeB);
    }
}
function organizarTimes(jogadores) {
    // Filtrar jogadores por nível (1 a 5) e agrupá-los por posição
    var jogadoresFiltrados = {};
    var _loop_1 = function (posicao) {
        var jogadoresPosicao = jogadores.filter(function (jogador) { return jogador.posicao === posicao && jogador.nivel >= 1 && jogador.nivel <= 5; });
        jogadoresFiltrados[posicao] = jogadoresPosicao;
    };
    for (var _i = 0, posicoesValidas_1 = posicoesValidas; _i < posicoesValidas_1.length; _i++) {
        var posicao = posicoesValidas_1[_i];
        _loop_1(posicao);
    }
    // Distribuir jogadores de forma equilibrada nos times com base na média de nível
    var timeA = [];
    var timeB = [];
    var posicoes = Object.keys(jogadoresFiltrados);
    while (posicoes.length > 0) {
        var posicaoIndex = Math.floor(Math.random() * posicoes.length);
        var posicao = posicoes[posicaoIndex];
        var jogadoresPosicao = jogadoresFiltrados[posicao];
        if (jogadoresPosicao.length >= 2) {
            // Escolha dois jogadores aleatórios dessa posição
            var jogadorIndex1 = Math.floor(Math.random() * jogadoresPosicao.length);
            var jogador1 = jogadoresPosicao.splice(jogadorIndex1, 1)[0];
            var jogadorIndex2 = Math.floor(Math.random() * jogadoresPosicao.length);
            var jogador2 = jogadoresPosicao.splice(jogadorIndex2, 1)[0];
            // Distribua os jogadores entre os times
            if (somaNivel(timeA) + jogador1.nivel <= somaNivel(timeB) + jogador2.nivel) {
                timeA.push(jogador1);
                timeB.push(jogador2);
            }
            else {
                timeA.push(jogador2);
                timeB.push(jogador1);
            }
        }
        else {
            // Não há jogadores suficientes nessa posição, remova-a das escolhas
            posicoes.splice(posicaoIndex, 1);
        }
    }
    return { timeA: timeA, timeB: timeB };
}
function somaNivel(time) {
    return time.reduce(function (total, jogador) { return total + jogador.nivel; }, 0);
}
adicionarJogador();
