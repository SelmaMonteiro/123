import Aluno from "./Aluno.js";
import Professor from "./Professor.js";
import Funcionario from "./Funcionario.js";

let aluno1 = new Aluno("Carlos", 15, "A12345");
let professor1 = new Professor("Ana", 40, "Matemática");
let funcionario1 = new Funcionario("Marcos", 35, "Secretário");

console.log("Dados do Aluno:");
aluno1.exibirInformacoes();

console.log("\Dados do Professor:");
professor1.exibirInformacoes();

console.log("\Dados do Funcionário:");
funcionario1.exibirInformacoes();