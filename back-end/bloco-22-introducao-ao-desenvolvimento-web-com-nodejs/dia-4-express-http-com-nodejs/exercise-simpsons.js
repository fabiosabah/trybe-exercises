const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { getSimpsons, setSimpsons} = require('./fs-utils');
const { fstat } = require('fs');

app.use(bodyParser.json());


app.get('/simpsons', async(req, res) => {
  try {
    const content = await getSimpsons();
    return res.status(200).json(content);
  } catch (error) {
    res.status(500).end();
  }
});

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  try {
    const simpsons = await getSimpsons();
    const findCharacter =  simpsons.find( (s) => parseInt(s.id) === parseInt(id));
    
    if (findCharacter) return res.status(409).json({ message: 'id already exists' });
    
    simpsons.push({id, name});

    await setSimpsons(simpsons);

    res.status(204).end();

  } catch (error) {
    res.status(500).end();
    
  }
});


app.get('/simpsons/:id', async(req, res) => {
  const { id } = req.params;
  try {
    const simpsons = await getSimpsons();
    console.log(simpsons)
    const character= simpsons.find((c) => parseInt(c.id) === parseInt(id));
    
    if (!character) return res.status(404).json({ message: 'Character not found'});

    res.status(200).json(character);

  } catch (error) {
    res.status(500).end();
  }
});


app.all('*', (req, res) => {
  res.status(404).json({message: `Route '${req.path}' not found`});
});

app.listen(3001, () => {
  console.log('Escutandoa na porta 3001');
});