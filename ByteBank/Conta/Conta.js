//Classe abstrata 
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;  
        if (this.constructor == Conta){
            throw new Error("Voce não deveria instanciar o objeto Conta, classe Abstrata");
        }    
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    //Metodo Abstrato
    sacar(valor) {
        throw new Error("O método Sacar da conta é abstrato")
       
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor) {
        if (valor <= 100) {
            return;
        }
        this._saldo += valor;
    }

    tranferir(valor, conta) {


        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }

    teste(){        
        console.log("teste na classe conta corrente")
       }
    
}