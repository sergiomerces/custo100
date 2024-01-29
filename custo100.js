// cálculo do tempo em horas para você ganhar R$ 100,00

console.clear();

const prompt = require('readline-sync');

console.log('Vamos calcular seu CUSTO 100!');

const salarioLiquido = Number(prompt.question('\nQual é o valor do seu salário líquido? R$ '));
const horasTrabalhadas = Number(prompt.question('\nQuantas horas você trabalha na semana? '));
const custo100 = 100 / (salarioLiquido / (horasTrabalhadas * 4));

console.log(`\nSalário Líquido: ${salarioLiquido.toFixed(2)}`);
console.log(`\nHoras Trabalhadas no mês: ${horasTrabalhadas}`);
console.log(`\nVocê precisa trabalhar ${custo100.toFixed(2)} para receber R$ 100,00\n`);