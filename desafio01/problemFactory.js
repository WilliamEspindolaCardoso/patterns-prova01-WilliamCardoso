// class Bicicleta {
//   move() {
//     return "Pedalando a bicicleta no pátio da UNISATC";
//   }
// }

// class Patinete {
//   move() {
//     return "Andando de patinete pelo estacionamento da UNISATC";
//   }
// }

// class Onibus {
//   move() {
//     return "Andando de ônibus e chegando na UNISATC";
//   }
// }

// const tipo = "onibus";
// let transporte;

// if (tipo === "bicicleta") {
//   transporte = new Bicicleta();
// } else if (tipo === "patinete") {
//   transporte = new Patinete();
// } else if (tipo === "onibus") {
//   transporte = new Onibus();
// }

// console.log(transporte.move());


class Bicicleta {
  move() {
    return ("Pedalando a bicicleta no pátio da UNISATC");
  }
}

class Patinete {
  move() {
    return ("Andando de patinete pelo estacionamento da UNISATC");
  }
}

class Onibus {
  move() {
    return ("Andando de ônibus e chegando na UNISATC");
  }
}

class TransporteFactory {
  static tipos = {
    bicicleta: Bicicleta,
    patinete: Patinete,
    onibus: Onibus,
  };

  static create(tipo) {
    const TransporteClass = this.tipos[tipo];
    if (!TransporteClass) {
      throw new Error("Tipo de transporte não suportado!");
    }
    return new TransporteClass();
  }
}

const tipo = "onibus";
const transporte = TransporteFactory.create(tipo);

console.log(transporte.move());

// Testando 2 itens ao mesmo tempo
const tipos = ["bicicleta", "patinete"];

tipos.forEach((tipo) => {
  const transporte = TransporteFactory.create(tipo);
  console.log(transporte.move());
});