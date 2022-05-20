const express = require('express');
const app = express();
const { getSimpsons, setSimpsons, authValidation, generateToken} = require('./utils');

app.use(express.json());



app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  
  if (!email || !password || !firstName || !phone ) {
    return res.status(401).json({messsage: 'missing fields'})
  }

  const token = generateToken();
  res.status(200).json({ token });

})


app.use(authValidation);

app.get('/simpsons', async(req, res) => {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'})

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