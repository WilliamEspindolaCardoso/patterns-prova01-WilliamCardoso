// class Lanche {
//   constructor(pao, carne, queijo, salada, molho) {
//     this.pao = pao;
//     this.carne = carne;
//     this.queijo = queijo;
//     this.salada = salada;
//     this.molho = molho;
//   }

//   show() {
//     console.log("Lanche:", {
//       pao: this.pao,
//       carne: this.carne,
//       queijo: this.queijo,
//       salada: this.salada,
//       molho: this.molho,
//     });
//   }
// }

// const lancheSimples = new Lanche(true, true, false, false, false);
// const lancheCompleto = new Lanche(true, true, true, true, true);

// lancheSimples.show();
// lancheCompleto.show();


class Lanche {
  constructor() {
    this.pao = null;
    this.carne = null;
    this.queijo = null;
    this.salada = null;
    this.molho = null;
  }

  showDetails() {
    console.log(`
      Pao: ${this.pao ? "Sim" : "Não"}
      Carne: ${this.carne ? "Sim" : "Não"}
      Queijo: ${this.queijo ? "Sim" : "Não"}
      Salada: ${this.salada ? "Sim" : "Não"}
      Molho: ${this.molho ? "Sim" : "Não"}
      `)
  }
}

class LancheBuilder {
  constructor() {
    this.lanche = new Lanche();
  }

  setPao(pao) {
    this.lanche.pao = pao;
    return this;
  }

  setCarne(carne) {
    this.lanche.carne = carne;
    return this;
  }

  setQueijo(queijo) {
    this.lanche.queijo = queijo;
    return this;
  }

  setSalada(salada) {
    this.lanche.salada = salada;
    return this;
  }

  setMolho(molho) {
    this.lanche.molho = molho;
    return this;
  }

  build() {
    return this.lanche;
  }
}

class LancheDirector {
static lancheSimples() {
    return new LancheBuilder()
      .setPao("True")
      .setCarne("True")
      .setQueijo("False")
      .setSalada("False")      
      .setMolho("False")
      .build();
  }

    static lancheCompleto() {
    return new LancheBuilder()
      .setPao("True")
      .setCarne("True")
      .setQueijo("True")
      .setSalada("True")      
      .setMolho("True")
      .build();
  }
}

const lancheSimples = LancheDirector.lancheSimples();
const lancheCompleto = LancheDirector.lancheCompleto();

lancheSimples.showDetails();
lancheCompleto.showDetails();