const { main } = require('./exercise-1');

const getRandomNum = () => {
  return Math.floor(Math.random() * 100 + 1);
}

function randomNums() { 
  return Array.from({length: 3}, () =>  getRandomNum())
}

const params = randomNums();
main(...params)
  .then(data => console.log(data))
  .catch(e =>  console.log(e.message))


module.exports = getRandomNum;