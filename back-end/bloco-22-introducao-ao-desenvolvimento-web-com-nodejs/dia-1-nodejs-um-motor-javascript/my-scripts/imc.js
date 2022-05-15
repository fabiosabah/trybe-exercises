function questions() {
  const readline = require('readline-sync');
  console.log('vamos calcular seu IMC.');
  const weight = readline.questionFloat('Qual seu peso? \n');
  const height = readline.questionFloat('Qual sua altura? \n');
  calcBmi(weight, height);
}

function calcBmi(weight, height) {
  const result = weight / Math.pow(height, 2);
  bmiRanges(result)
}

function bmiRanges(bmi) {
  if(bmi < 18.5) return  console.log('Situação: Abaixo do peso (magreza)');
  if(bmi < 25) return console.log( 'Situação: Peso normal');
  if(bmi < 30) return  console.log( 'Situação: Acima do peso (sobrepeso)');
  if(bmi < 35) return console.log( 'Situação: Obesidade grau I');
  if(bmi < 40) return console.log( 'Situação: Obesidade grau II');
  if(bmi < 45) return console.log( 'Situação: Obesidade grau III');
  if(bmi > 45) return console.log('Situação: Obesidade grau IV');
 } 

questions();







