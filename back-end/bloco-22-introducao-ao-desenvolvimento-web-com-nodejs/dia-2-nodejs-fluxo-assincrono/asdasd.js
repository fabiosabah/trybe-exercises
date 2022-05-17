const getRandomNum = () => {
  return Math.floor(Math.random() * 100 + 1);
}

function randomNums() { 
  return Array.from({length: 3}, () =>  getRandomNum())
}


console.log(random)