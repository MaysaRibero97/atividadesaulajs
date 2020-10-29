/*
Desenvolva uma aplicação em JavaScript para ler o nome, as três notas e o número de
faltas de um aluno e escrever qual a sua situação final: 
Aprovado, 
Reprovado por Falta
ou Reprovado por Média. 
A média para aprovação é 70 e o limite de faltas é 25% do total de aulas. 
O número de aulas ministradas no semestre foi de 80. A reprovação por falta sobrepõe a reprovação por Média.
*/

const MEDIA = 70;
const AULAS = 80;
const LIMITE_FALTAS = 25;

let nome = "Mauro Duarte";
let nota1 = 45;
let nota2 = 59;
let nota3 = 100;
let numFaltas = 10;

let somaNotaAluno = nota1 + nota2 + nota3;
console.log("soma das notas "+ somaNotaAluno);

let mediaAluno = somaNotaAluno / 3;
console.log("media das notas "+ mediaAluno);

let mediaAlunoFormat = mediaAluno.toFixed();
console.log("media formatada "+ mediaAlunoFormat);

// 1ª parte da solução do problema - rascunho
if (mediaAlunoFormat >= MEDIA) {
  console.log("O aluno " + nome + " está Aprovado");
} else {
  console.log("O aluno " + nome + " está Rerovado");
}

//calculo da porcentagem (x/y)*100 
let porcentagemFaltas = (numFaltas/AULAS)*100
console.log("porcentagem de faltas "+ porcentagemFaltas);

if(mediaAlunoFormat >= MEDIA && porcentagemFaltas < LIMITE_FALTAS) {
  console.log("O aluno " + nome + " está Aprovado");
} else if (mediaAlunoFormat >= MEDIA && porcentagemFaltas > LIMITE_FALTAS) {
  console.log("O aluno " + nome + " está Reprovado por Falta");
} else {
  console.log("O aluno " + nome + " está Reprovado por Média");
}
