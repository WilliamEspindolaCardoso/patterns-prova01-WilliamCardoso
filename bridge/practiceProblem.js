// // Muitas combinações duplicadas
// class AudioWindows {
//   play() {
//     console.log("Reproduzindo áudio no Windows");
//   }
// }

// class AudioLinux {
//   play() {
//     console.log("Reproduzindo áudio no Linux");
//   }
// }

// class VideoWindows {
//   play() {
//     console.log("Reproduzindo vídeo no Windows");
//   }
// }

// class VideoLinux {
//   play() {
//     console.log("Reproduzindo vídeo no Linux");
//   }
// }

// // Cliente
// const a1 = new AudioWindows();
// a1.play();

// const v1 = new VideoLinux();
// v1.play();




// Implementação: plataformas (detalhes técnicos)
class WindowsPlayer {
  playMedia(type) {
    console.log(`Reproduzindo ${type} no Windows`);
  }
}

class LinuxPlayer {
  playMedia(type) {
    console.log(`Reproduzindo ${type} no Linux`);
  }
}

// Abstração: mídia (lado conceitual)
class Media {
  constructor(player) {
    this.player = player; // Ponte para a implementação
  }

  play() {
    throw new Error("Método 'play()' deve ser implementado pelas subclasses");
  }
}

// Abstrações refinadas
class Audio extends Media {
  play() {
    this.player.playMedia("áudio");
  }
}

class Video extends Media {
  play() {
    this.player.playMedia("vídeo");
  }
}

// Cliente
const windows = new WindowsPlayer();
const linux = new LinuxPlayer();

const audioWin = new Audio(windows);
audioWin.play(); // "Reproduzindo áudio no Windows"

const audioLinux = new Audio(linux);
audioLinux.play(); // "Reproduzindo áudio no Linux"

const videoWin = new Video(windows);
videoWin.play(); // "Reproduzindo vídeo no Windows"

const videoLinux = new Video(linux);
videoLinux.play(); // "Reproduzindo vídeo no Linux"
