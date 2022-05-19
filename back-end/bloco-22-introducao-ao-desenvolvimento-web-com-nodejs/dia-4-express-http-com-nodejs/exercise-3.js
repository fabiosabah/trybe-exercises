const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if( age < 18) return res.status(401).json({message: "Unauthorized"});

  res.status(201).json({message: `Hello, ${name}!`})

})
                                                                                           

app.listen(3001, ()=> {
  console.log('Escutando a porta 3001');
})