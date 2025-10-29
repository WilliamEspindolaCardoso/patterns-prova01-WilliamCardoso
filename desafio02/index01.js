
class LegacyPaymentSystem {
  makePayment(amount) {
    console.log(`Pagando R$${amount} com sistema legado.`);
  }
}

class ModernPaymentAPI {
  process(amountInCents) {
    console.log(`Pagamento de R$${amountInCents / 100} via API moderna.`);
  }
}

class ModernPaymentAdapter extends LegacyPaymentSystem {
  constructor(modernAPI) {
    super();
    this.modernAPI = modernAPI;
  }

  makePayment(amount) {
        const amountInCents = amount * 100;
    this.modernAPI.process(amountInCents);
  }
}

class PaymentProcessor {
  constructor(system) {
    this.system = system;
  }

  pay(amount) {
    this.system.makePayment(amount);
  }
}

const legacySystem = new LegacyPaymentSystem();
const processorLegacy = new PaymentProcessor(legacySystem);
processorLegacy.pay(100);

const modernAPI = new ModernPaymentAPI();
const adaptedSystem = new ModernPaymentAdapter(modernAPI);
const processorModern = new PaymentProcessor(adaptedSystem);
processorModern.pay(250);
