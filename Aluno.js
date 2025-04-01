import Pessoa from "./Pessoa.js";

class Aluno extends Pessoa {
    constructor(nome, idade, matricula) {
        super(nome, idade);
        this._matricula = matricula;
    }

    get matricula() {
        return this._matricula;
    }

    set matricula(novaMatricula) {
        this._matricula = novaMatricula;
    }

    exibirInformacoes() {
        super.exibirInformacoes();
        console.log("Matrícula: " + this._matricula);
    }
}

export default Aluno;