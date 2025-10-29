class Device {
  turnOn() {
    throw new Error("Método 'turnOn()' deve ser implementado.");
  }

  turnOff() {
    throw new Error("Método 'turnOff()' deve ser implementado.");
  }
}

class TV extends Device {
  turnOn() {
    console.log("TV ligada.");
  }

  turnOff() {
    console.log("TV desligada.");
  }
}

class Radio extends Device {
  turnOn() {
    console.log("Rádio ligado.");
  }

  turnOff() {
    console.log("Rádio desligado.");
  }
}

class RemoteControl {
  constructor(device) {
    this.device = device; 
  }

  pressPowerButton(on) {
    if (on) this.device.turnOn();
    else this.device.turnOff();
  }
}

class AdvancedRemote extends RemoteControl {
  mute() {
    console.log("Dispositivo mutado.");
  }
}

const tv = new TV();
const radio = new Radio();

const remote1 = new RemoteControl(tv);
remote1.pressPowerButton(true);  // ligada
remote1.pressPowerButton(false); // desligada

const remote2 = new AdvancedRemote(radio);
remote2.pressPowerButton(true);  // ligado
remote2.mute();                  // mutado
remote2.pressPowerButton(false); // desligado