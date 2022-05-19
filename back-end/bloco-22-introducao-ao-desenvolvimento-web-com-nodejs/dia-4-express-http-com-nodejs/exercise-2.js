const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/hello', (req, res) => {
  const { user } = req.body;
  
  res.status(201).json({message: `Hello, ${user}!`});
})

app.listen(3001, ()=> {
  console.log('Escutando a porta 3001');
})