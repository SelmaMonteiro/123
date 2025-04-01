import Aluno from "./Aluno.js";
import Pessoa from "./Pessoa.js";
import Professor from "./Professor.js";


// Criando objetos
const pessoa = new Pessoa("Carlos", 35);
const aluno = new Aluno("Ana", 16);
const professor = new Professor("Marcos", 40);

// Chamando os métodos
pessoa.falar();    // "Falando"
aluno.falar();     // "Perguntando"
professor.falar(); // "Dando aula"

// Testando GET
console.log(pessoa.nome);  // "Carlos"
console.log(aluno.nome);   // "Ana"

// Testando SET
pessoa.nome = "Roberto";  // Sucesso
aluno.nome = "Beatriz";   // Erro: Apenas maiores de 18 anos podem trocar de nome.





