// // Interface interna do sistema
// class Notifier {
//   send(message) {
//     console.log(`Notificação enviada: ${message}`);
//   }
// }

// // Biblioteca externa (incompatível com o sistema)
// class SMSService {
//   sendSMS(text) {
//     console.log(`SMS enviado: ${text}`);
//   }
// }

// // Cliente
// function notifyUser(notifier, message) {
//   notifier.send(message);
// }

// // Testando com o Notifier interno
// const emailNotifier = new Notifier();
// notifyUser(emailNotifier, "Bem-vindo ao sistema!");

// // Tentando usar o SMSService diretamente (vai falhar)
// const smsService = new SMSService();
// // notifyUser(smsService, "Seu código é 1234");




// Interface interna do sistema
class Notifier {
  send(message) {
    console.log(`Notificação enviada: ${message}`);
  }
}

// Biblioteca externa (incompatível com o sistema)
class SMSService {
  sendSMS(text) {
    console.log(`SMS enviado: ${text}`);
  }
}

// Adapter que "traduz" o SMSService para o formato esperado pelo sistema
class SMSAdapter extends Notifier {
  constructor(smsService) {
    super();
    this.smsService = smsService;
  }

  send(message) {
    // Aqui ocorre a "tradução"
    this.smsService.sendSMS(message);
  }
}

// Cliente
function notifyUser(notifier, message) {
  notifier.send(message);
}

// Testando com o Notifier interno
const emailNotifier = new Notifier();
notifyUser(emailNotifier, "Bem-vindo ao sistema!");

// Testando com o serviço SMS adaptado
const smsService = new SMSService();
const smsNotifier = new SMSAdapter(smsService);
notifyUser(smsNotifier, "Seu código é 1234");
