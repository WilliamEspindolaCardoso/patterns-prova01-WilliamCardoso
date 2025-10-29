// // Classes concretas
// class DebitCard {
//   pay(type, user, amount) {
//     console.log(`O cliente ${user} está pagando no ${type} o valor de R$ ${amount}`);
//   }
// }

// class CreditCard {
//   pay(type, amount) {
//     console.log(`Pagando com ${type} no valor de R$ ${amount}`);
//   }
// }

// class Pix {
//   pay(type, amount) {
//     console.log(`Pagando com ${type} no valor de R$ ${amount}`);
//   }
// }


// // Usando Factory Method
// class PaymentFactory{
//   static types = {
//     debit: DebitCard,
//     credit: CreditCard,
//     pix: Pix
//   };

//   static createPayment(type) {
//     const PaymentClass = this.types[type];
//     if (!PaymentClass) {
//       throw new Error("Tipo de pagamento ainda não suportado");
//     }
//     return new PaymentClass();
//   }
// }


// // Código do cliente
// function main() {
//   const payments = {"debit": {"user": "William", "amount": 150.5}};
//   try {
//     Object.entries(payments).forEach(([type, info]) => {
//       const payment = PaymentFactory.createPayment(type);
//       payment.pay(type, info.user, info.amount);
//     });
//   } catch (err) {
//     console.error("Erro ao realizar pagamento...", err.message);
//   }
// }

// main();



// Interface comum (contrato)
class Payment {
  pay(type, user, amount) {
    throw new Error("Método pay() deve ser implementado");
  }
}

// Classes concretas
class DebitCard extends Payment {
  pay(type, user, amount) {
    console.log(`💳 O cliente ${user} está pagando o ${type} o valor de R$ ${amount}`);
  }
}

class CreditCard extends Payment {
  pay(type, user, amount) {
    console.log(`💳 O cliente ${user} está pagando com ${type} o valor de R$ ${amount}`);
  }
}

class Pix extends Payment {
  pay(type, user, amount) {
    console.log(`⚡ O cliente ${user} está pagando via ${type} no valor de R$ ${amount}`);
  }
}

// Factory Method
class PaymentFactory {
  static types = {
    debit: DebitCard,
    credit: CreditCard,
    pix: Pix,
  };

  static createPayment(type) {
    const PaymentClass = this.types[type];
    if (!PaymentClass) {
      throw new Error("Tipo de pagamento ainda não suportado");
    }
    return new PaymentClass();
  }
}

// Código do cliente
function main() {
  const payments = {
    debit: { user: "William", amount: 150.5 },
    credit: { user: "Maria", amount: 300 },
    pix: { user: "João", amount: 50 },
  };

  try {
    Object.entries(payments).forEach(([type, info]) => {
      const payment = PaymentFactory.createPayment(type);
      payment.pay(type, info.user, info.amount);
    });
  } catch (err) {
    console.error("Erro ao realizar pagamento...", err.message);
  }
}

main();