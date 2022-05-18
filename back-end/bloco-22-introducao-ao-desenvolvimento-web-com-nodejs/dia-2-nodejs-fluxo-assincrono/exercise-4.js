const fs = require('fs').promises;
const FILE_NAME = 'simpsons.json'

const readJson = async (file) => {
  const data = await fs.readFile(file, 'utf-8');
   return JSON.parse(data);
}

const getCharacter = async () => {
    const data = await readJson('./simpsons.json')
    return data.forEach(({id, name}) => {
      console.log(`${id} - ${name}`);
    });
}

const getById = async (id) => {
    const data = await readJson('./simpsons.json');
    const result  = data.find( a => Number(a.id) == id);
    if(!result) {
      throw new Error('Id não encontrado')
    } 
    return result
}

// function main() {
//   getById()
//     .then(resolve => console.log(resolve))
//     .catch(error => console.error(`Erro : ${error.message}`))
// }


// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

const filterCharacters = async () => {
  const data = await readJson('./simpsons.json');
  const ids = [6, 10]
  const filtered = data.filter( element => {
    return !ids.includes(Number(element.id));
  });
  try {
    const content = JSON.stringify(filtered, null, 1);
    await fs.writeFile('simpsons.json', content);
    
  }catch (e){
    console.error(e.message)
  }

}

// filterCharacters();

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

const newFile = async () => {
  const data = await readJson('./simpsons.json');
  const filtered  = data.filter( simpsons => {
    if (simpsons.id  > 0 && simpsons.id < 5) {
      return true;
    }
  });
  try {
    const newContent = JSON.stringify(filtered, null, 1);
    await fs.writeFile('./simpsonFamily.json', newContent)

  } catch (e) {
    console.error(`Erro: ${e.message}`);
  }
}

// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

const addNelson = async () => {
  const allCharacters = await readJson('./simpsons.json');
  const findNelson = allCharacters.find(element => element.name.includes('Nelson'));
  const data = await readJson('./simpsonFamily.json');
  data.push(findNelson);
  console.log(data);
  const content = JSON.stringify(data, null, 1);
  fs.writeFile('./simpsonFamily.json', content);
}

addNelson()