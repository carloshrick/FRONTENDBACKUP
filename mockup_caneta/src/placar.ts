class Placar {
    private pontosTimeA: number;
    private pontosTimeB: number;
  
    constructor() {
      this.pontosTimeA = 0;
      this.pontosTimeB = 0;
    }
  
    adicionarPontosTimeA(pontos: number) {
      this.pontosTimeA += pontos;
    }
  
    adicionarPontosTimeB(pontos: number) {
      this.pontosTimeB += pontos;
    }
  
    getPontosTimeA(): number {
      return this.pontosTimeA;
    }
  
    getPontosTimeB(): number {
      return this.pontosTimeB;
    }
  
    reiniciarPlacar() {
      this.pontosTimeA = 0;
      this.pontosTimeB = 0;
    }
  }
  
  const placar = new Placar();
  
  function atualizarPlacar() {
    const pontosTimeAElement = document.getElementById("pontos-time-a");
    const pontosTimeBElement = document.getElementById("pontos-time-b");
  
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
  