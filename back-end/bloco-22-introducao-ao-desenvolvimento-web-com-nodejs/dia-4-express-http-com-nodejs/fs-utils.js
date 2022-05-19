const fs = require('fs/promises');
const FILE_NAME = './simpsons.json';

function getSimpsons () {
  return fs.readFile(FILE_NAME, 'utf-8')
    .then( content => JSON.parse(content));
}

function setSimpsons(content) { 
  return fs.writeFile(FILE_NAME, JSON.stringify(content))
}


module.exports = { getSimpsons, setSimpsons};