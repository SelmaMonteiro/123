import Pessoa from "./Pessoa.js";

class Funcionario extends Pessoa {
    constructor(nome, idade, cargo) {
        super(nome, idade);
        this._cargo = cargo;
    }

    get cargo() {
        return this._cargo;
    }

    set cargo(novoCargo) {
        this._cargo = novoCargo;
    }

    exibirInformacoes() {
        super.exibirInformacoes();
        console.log("Cargo: " + this._cargo);
    }
}

export default Funcionario;