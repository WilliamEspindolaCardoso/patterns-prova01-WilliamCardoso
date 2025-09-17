// // Classes concretas
// class PdfReport {
//   generate() {
//     return "Relatório em PDF gerado!";
//   }
// }

// class PdfInvoice {
//   generate() {
//     return "Fatura em PDF gerada!";
//   }
// }

// class DocxReport {
//   generate() {
//     return "Relatório em DOCX gerado!";
//   }
// }

// class DocxInvoice {
//   generate() {
//     return "Fatura em DOCX gerada!";
//   }
// }

// // Cliente
// function main(format) {
//   let report, invoice;

//   if (format === "pdf") {
//     report = new PdfReport();
//     invoice = new PdfInvoice();
//   } else if (format === "docx") {
//     report = new DocxReport();
//     invoice = new DocxInvoice();
//   } else {
//     throw new Error("Formato não suportado");
//   }

//   console.log(report.generate());
//   console.log(invoice.generate());
// }

// main("pdf");
// main("docx");



// Produtos abstratos
class Report {
  generate() {}
}

class Invoice {
  generate() {}
}

// Produtos concretos PDF
class PdfReport extends Report {
  generate() {
    return "Relatório em PDF gerado!";
  }
}

class PdfInvoice extends Invoice {
  generate() {
    return "Fatura em PDF gerada!";
  }
}

// Produtos concretos DOCX
class DocxReport extends Report {
  generate() {
    return "Relatório em DOCX gerado!";
  }
}

class DocxInvoice extends Invoice {
  generate() {
    return "Fatura em DOCX gerada!";
  }
}

// Fábrica abstrata
class DocumentFactory {
  createReport() {}
  createInvoice() {}
}

// Fábricas concretas
class PdfFactory extends DocumentFactory {
  createReport() {
    return new PdfReport();
  }
  createInvoice() {
    return new PdfInvoice();
  }
}

class DocxFactory extends DocumentFactory {
  createReport() {
    return new DocxReport();
  }
  createInvoice() {
    return new DocxInvoice();
  }
}

// Cliente
function main(factory) {
  const report = factory.createReport();
  const invoice = factory.createInvoice();

  console.log(report.generate());
  console.log(invoice.generate());
}

// Testando
console.log("### PDF ###");
main(new PdfFactory());

console.log("### DOCX ###");
main(new DocxFactory());