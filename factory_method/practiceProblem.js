// // Classes concretas
// class DebitCard {
//   pay(type, amount) {
//     console.log(`Pagando com ${type} no valor de R$ ${amount}`);
//   }
// }

// class CreditCard {
//   pay(type, amount) {
//     console.log(`Pagando com ${type} no valor de R$ ${amount}`);
//   }
// }

// // Código do cliente
// function main() {
//   const type = "credit card";

//   let expenses;
//   if (type === "debit card") {
//     expenses = new DebitCard();
//   } else if (type === "credit card") {
//     expenses = new CreditCard();
//   }

//   expenses.pay(`${type}`, "R$ 500,00");
// }

// main();



// Classes concretas
class DebitCard {
  pay(type, user, amount) {
    console.log(`O cliente ${user} está pagando no ${type} o valor de R$ ${amount}`);
  }
}

class CreditCard {
  pay(type, amount) {
    console.log(`Pagando com ${type} no valor de R$ ${amount}`);
  }
}

class Pix {
  pay(type, amount) {
    console.log(`Pagando com ${type} no valor de R$ ${amount}`);
  }
}


// Usando Factory Method
class PaymentFactory{
  static types = {
    debit: DebitCard,
    credit: CreditCard,
    pix: Pix
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
  const payments = {"debit": {"user": "William", "amount": 150.5},
                   "transf": {"user": "Aline", "amount": 382.0}};
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