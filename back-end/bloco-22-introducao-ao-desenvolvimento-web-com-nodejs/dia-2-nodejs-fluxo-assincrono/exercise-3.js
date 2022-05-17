const {main} = require('./exercise-1');

const getRandomNum = () => {
  return Math.floor(Math.random() * 100 + 1);
}

function randomNums() { 
  return Array.from({length: 3}, () =>  getRandomNum())
}


const callFunc = async () => {
   try {
    const result = await main(...randomNums());
    console.log(result);
  } catch(e) {
    console.log(e.message);
  }
} 

callFunc();


module.exports = getRandomNum;