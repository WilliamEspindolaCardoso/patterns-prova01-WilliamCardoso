// CREATOR

class Conta {
  constructor(numero, titular) {
    this.numero = numero;
    this.titular = titular;
    this.saldo = 0;
  }
}

class Banco {
  constructor() {
    this.contas = [];
  }

  abrirConta(titular) {
    const numeroGerado = this.contas.length + 1;

    const conta = new Conta(numeroGerado, titular); // Creator
    this.contas.push(conta);

    return conta;
  }
}

// Controller só coordena
class SistemaController {
  solicitarAbertura(banco, titular) {
    return banco.abrirConta(titular);
  }
}

const banco = new Banco();
const sistema = new SistemaController();

const conta = sistema.solicitarAbertura(banco, "Maria");

console.log(conta);