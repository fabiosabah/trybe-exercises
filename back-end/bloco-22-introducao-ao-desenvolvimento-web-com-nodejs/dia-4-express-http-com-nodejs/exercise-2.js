const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/hello', (req, res) => {
  const { name } = req.body;
  
  res.status(201).json({message: `Hello, ${name}!`});
})

app.listen(3001, ()=> {
  console.log('Escutando a porta 3001');
})