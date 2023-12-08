var Placar = /** @class */ (function () {
    function Placar() {
        this.pontosTimeA = 0;
        this.pontosTimeB = 0;
    }
    Placar.prototype.adicionarPontosTimeA = function (pontos) {
        this.pontosTimeA += pontos;
    };
    Placar.prototype.adicionarPontosTimeB = function (pontos) {
        this.pontosTimeB += pontos;
    };
    Placar.prototype.getPontosTimeA = function () {
        return this.pontosTimeA;
    };
    Placar.prototype.getPontosTimeB = function () {
        return this.pontosTimeB;
    };
    Placar.prototype.reiniciarPlacar = function () {
        this.pontosTimeA = 0;
        this.pontosTimeB = 0;
    };
    return Placar;
}());
var placar = new Placar();
function atualizarPlacar() {
    var pontosTimeAElement = document.getElementById("pontos-time-a");
    var pontosTimeBElement = document.getElementById("pontos-time-b");
    pontosTimeAElement.textContent = placar.getPontosTimeA().toString();
    pontosTimeBElement.textContent = placar.getPontosTimeB().toString();
}
function adicionarPontosTimeA() {
    placar.adicionarPontosTimeA(1);
    atualizarPlacar();
}
function adicionarPontosTimeB() {
    placar.adicionarPontosTimeB(1);
    atualizarPlacar();
}
function reiniciarPlacar() {
    placar.reiniciarPlacar();
    atualizarPlacar();
}
