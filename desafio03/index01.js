// Single Responsibility

class Aluno {
  constructor(nome, notas) {
    this.nome = nome;
    this.notas = notas;
  }
}

// responsabilidades divididas
class NotaService {
  static validarNotas(notas) {
    return notas.every(n => n >= 0 && n <= 10);
  }

  static calcularMedia(notas) {
    return notas.reduce((a, b) => a + b, 0) / notas.length;
  }
}

class ComunicacaoService {
  static enviarMensagemParaPais(aluno) {
    console.log(`Mensagem enviada aos pais de ${aluno.nome}.`);
  }
}

class FinanceiroService {
  static gerarBoleto(aluno) {
    console.log(`Boleto gerado para ${aluno.nome}.`);
  }
}

const a = new Aluno("Maria", [8, 9, 7]);

console.log(NotaService.validarNotas(a.notas));
console.log(NotaService.calcularMedia(a.notas));
ComunicacaoService.enviarMensagemParaPais(a);
FinanceiroService.gerarBoleto(a);