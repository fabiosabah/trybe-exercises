const readline = require('readline-sync');

const AvgSpeed = (distance, time) => {
console.log((distance / time));
}

const questions = () => {
  const distance = readline.questionInt('Qual é a distância(m)?');
  const time = readline.questionInt('Qual é o tempo (s)');
  AvgSpeed(distance, time);  
}

questions()