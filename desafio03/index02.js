// Interface Segregation

class Come {
  comer() {}
}

class Anda {
  andar() {}
}

class Voa {
  voar() {}
}

class Pinguim extends Come {
  comer() { console.log("Pinguim comendo peixe."); }
  andar() { console.log("Pinguim andando."); }
}

// Pato implementa comer + andar + voar
class Pato {
  comer() { console.log("Pato comendo."); }
  andar() { console.log("Pato andando."); }
  voar() { console.log("Pato voando."); }
}

const pinguim = new Pinguim();
pinguim.comer();
pinguim.andar();

const pato = new Pato();
pato.comer();
pato.andar();
pato.voar();