import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente("Ricardo", 7744778899);
/* cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309; */

const cliente2 = new Cliente("Alice", 88822233309 );
/* cliente2.nome = "Alice";
cliente2.cpf = 88822233309; */

console.log(cliente2.cpf);

console.log("*** Nome Cliente ***")
console.log(cliente1.nome);
console.log(cliente2.nome);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
/* contaCorrenteRicardo.agencia = ;
contaCorrenteRicardo.cliente = ;
contaCorrenteRicardo.depositar(500); */

const conta2 = new ContaCorrente(102, cliente2);
/* conta2.cliente = cliente2;
conta2.agencia = 102; */

contaCorrenteRicardo.depositar(500);

console.log(conta2);
console.log(contaCorrenteRicardo);

console.log(ContaCorrente.numeroDeConta);

/* const conta2 = new ContaCorrente();
conta2.cliente = new Cliente();
conta2.cliente.nome = "Alice";
conta2.cliente.cpf = 88822233309;
conta2.agencia = 102; */


/* contaCorrenteRicardo.depositar(-100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(500);
console.log(contaCorrenteRicardo); */

/* const valorSacado = contaCorrenteRicardo.sacar(50);
console.log("*** Valor Sacado ***")
console.log(valorSacado); */

/* const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;
console.log(conta2); */

/* contaCorrenteRicardo.transferir(500, conta2);
console.log(conta2.saldo);
console.log(contaCorrenteRicardo); */



