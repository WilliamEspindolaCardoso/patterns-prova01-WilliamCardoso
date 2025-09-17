// // Classe Database
// class Database {
//   constructor(connectionString) {
//     this.connectionString = connectionString;
//     this.id = Math.random();
//     console.log(`🔌 Nova conexão criada: ${this.id}`);
//   }

//   query(sql) {
//     console.log(`Executando query [${sql}] na conexão ${this.id}`);
//   }
// }

// // Cliente
// const db1 = new Database("db://meu-banco");
// db1.query("SELECT * FROM users");

// const db2 = new Database("db://meu-banco");
// db2.query("SELECT * FROM products");




// Classe Database
class Database {
  constructor(connectionString) {
    if (Database.instance) {
      return Database.instance;
    }

    this.connectionString = connectionString;
    this.id = Math.random();
    console.log(`🔌 Nova conexão criada: ${this.id}`);

    Database.instance = this;
  }

  query(sql) {
    console.log(`Executando query [${sql}] na conexão ${this.id}`);
  }

  static getInstance(connectionString) {
    if (!Database.instance) {
      Database.instance = new Database(connectionString);
    }
    return Database.instance;
  }
}

// Uso
const db1 = Database.getInstance("db://meu-banco");
db1.query("SELECT * FROM users");

const db2 = Database.getInstance("db://meu-banco");
db2.query("SELECT * FROM products");

console.log(db1 === db2);


// Classe Logger (Singleton)
class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance; // retorna a mesma instância se já existir
    }

    this.logs = []; // armazena mensagens
    Logger.instance = this;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push(`[${timestamp}] ${message}`);
    console.log(`[LOG] ${message}`);
  }

  showLogs() {
    console.log("\n📜 Histórico de Logs:");
    this.logs.forEach(l => console.log(l));
  }

  static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }
}

// Uso do Singleton
const logger1 = Logger.getInstance();
logger1.log("Aplicação iniciada.");
logger1.log("Usuário fez login.");

const logger2 = Logger.getInstance();
logger2.log("Usuário acessou a página de produtos.");

logger1.showLogs(); // mostra todos os logs (logger1 === logger2)
console.log("\nÉ a mesma instância?", logger1 === logger2);