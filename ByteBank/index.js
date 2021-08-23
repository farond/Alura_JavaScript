import { Cliente } from "./Conta/Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Conta } from "./Conta.js";


const cliente1 = new Cliente("Ricardo", 7744778899);

const cliente2 = new Cliente("Alice", 88822233309);

console.log(cliente2.cpf);

console.log("*** Nome Cliente ***")
console.log(cliente1.nome);
console.log(cliente2.nome);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);

const conta2 = new ContaCorrente(102, cliente2);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

const conta = new Conta(0, cliente1, 1001)

contaCorrenteRicardo.depositar(500);
contaPoupanca.sacar(20);
contaCorrenteRicardo.sacar(100);

console.log(conta2);
console.log(Conta);

console.log(contaPoupanca);
console.log(contaCorrenteRicardo);

console.log(ContaCorrente.numeroDeConta);


contaCorrenteRicardo.teste();