// // class Car {
//   constructor(brand, model, year, engine, color, gps) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.engine = engine;
//     this.color = color;
//     this.gps = gps;
//   }

//   showDetails() {
//     console.log(
//       `${this.year} 
//       ${this.brand} 
//       ${this.model} 
//       - Motor: ${this.engine}, 
//       Cor: ${this.color}, 
//       GPS: ${this.gps ? "Sim" : "Não"}`
//     );
//   }
// }

// // Cliente precisa lembrar a ordem e todos os parâmetros
// const car1 = new Car("Toyota", "Corolla", 2024, "2.0", "Preto", true);
// const car2 = new Car("Honda", "Civic", 2023, "1.5 Turbo", "Prata", false);

// car1.showDetails();
// car2.showDetails();



class Car {
  constructor() {
    this.brand = null;
    this.model = null;
    this.year = null;
    this.engine = null;
    this.color = null;
    this.gps = null;
  }

  showDetails() {
    console.log(`
      Marca: ${this.brand}
      Modelo: ${this.model}
      Ano: ${this.year}
      Motorização: ${this.engine}
      Cor: ${this.color}
      GPS: ${this.gps ? "Sim" : "Não"}
      `)
  }
}

// Builder
class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setMarca(brand) {
    this.car.brand = brand;
    return this;
  }

  setModelo(model) {
    this.car.model = model;
    return this;
  }

  setAno(year) {
    this.car.year = year;
    return this;
  }

  setMotorização(engine) {
    this.car.engine = engine;
    return this;
  }

  setCor(color) {
    this.car.color = color;
    return this;
  }

  setGPS(gps) {
    this.car.gps = gps;
    return this;
  }

  build() {
    return this.car;
  }
}

// Director → monta configurações pré-definidas
class CarDirector {
  static Corolla() {
    return new CarBuilder()
      .setMarca("Toyota")
      .setModelo("Corolla")
      .setAno("2024")
      .setMotorização("2.0")      
      .setCor("Preto")
      .setGPS("true")
      .build();
  }

  static Civic() {
    return new CarBuilder()
      .setMarca("Honda")
      .setModelo("Civic")
      .setAno("2023")
      .setMotorização("1.5 Turbo")      
      .setCor("Prata")
      .setGPS("false")
      .build();
  }

    static Fusion() {
    return new CarBuilder()
      .setMarca("Ford")
      .setModelo("Fusion")
      .setAno("2018")
      .setMotorização("2.5")      
      .setCor("Branco")
      .setGPS("true")
      .build();
  }
}

// Uso
const toyotacorolla = CarDirector.Corolla();
const hondacivic = CarDirector.Civic();
const fordfusion = CarDirector.Fusion();
const peugeot308 = new CarBuilder().setMarca("Peugeot").setModelo("308").setAno("2014").build();

toyotacorolla.showDetails();
hondacivic.showDetails();
fordfusion.showDetails();
peugeot308.showDetails();
