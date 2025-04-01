
class Pessoa {
    #nome; // Atributo privado
    #idade;

    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;
    }

    // Getter para nome
    get nome() {
        return this.#nome;
    }

    // Setter para nome
    set nome(novoNome) {
        if (this.#idade >= 18) {
            this.#nome = novoNome;
            console.log(`Nome alterado para: ${this.#nome}`);
        } else {
            console.log("Erro: Apenas maiores de 18 anos podem trocar de nome.");
        }
    }

    // Getter para idade
    get idade() {
        return this.#idade;
    }

    falar() {
        console.log("Falando");
    }
}



export default Pessoa;