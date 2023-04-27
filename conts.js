
const nomeCompleto = prompt ('Digite seu nome');
const anoNascimento =parseInt (prompt ("Informe o ano de nascimento"));
const salarioMensal = parseFloat(prompt('Informe seu salario mensal'));
const qtdFilhos=parseInt (prompt('Informe quantos filhos você tem'));
const idade = 2023-anoNascimento;

const aposentadoria = ((70-idade )*12) *salarioMensal;

const divFilhos = salarioMensal/qtdFilhos;

console.log (`Olá,${nomeCompleto}, tudo bem? você tem anos de ${idade} e seu salario e ${salarioMensal.toFixed(2)} e recebera ${aposentadoria.toFixed(2)}  ate se aposentar. Caso voce deseje dividir seu salario entre seus filhos dara ${divFilhos.toFixed(2)} para cada um.`);
