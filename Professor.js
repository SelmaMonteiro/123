import Pessoa from "./Pessoa.js";

class Professor extends Pessoa {
    constructor(nome, idade, disciplina) {
        super(nome, idade);
        this._disciplina = disciplina;
    }

    get disciplina() {
        return this._disciplina;
    }

    set disciplina(novaDisciplina) {
        this._disciplina = novaDisciplina;
    }

    exibirInformacoes() {
        super.exibirInformacoes();
        console.log("Disciplina: " + this._disciplina);
    }
}

export default Professor;
