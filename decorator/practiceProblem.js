// class MessagePrinter {
//   print(text) {
//     console.log(text);
//   }
// }

// const printer = new MessagePrinter();
// printer.print("Olá, mundo!");




// Componente base
class MessagePrinter {
  print(text) {
    console.log(text);
  }
}

// Decorator base
class PrinterDecorator {
  constructor(printer) {
    this.printer = printer;
  }

  print(text) {
    this.printer.print(text);
  }
}

// Decorator concreto: adiciona prefixo
class PrefixPrinter extends PrinterDecorator {
  constructor(printer, prefix) {
    super(printer);
    this.prefix = prefix;
  }

  print(text) {
    super.print(`${this.prefix} ${text}`);
  }
}

// Decorator concreto: adiciona sufixo
class SuffixPrinter extends PrinterDecorator {
  constructor(printer, suffix) {
    super(printer);
    this.suffix = suffix;
  }

  print(text) {
    super.print(`${text} ${this.suffix}`);
  }
}

// Cliente: empilhando decorators
const printer = new SuffixPrinter(
  new PrefixPrinter(
    new MessagePrinter(),
    "[Início]"
  ),
  "[Fim]"
);

printer.print("Olá, mundo!");
