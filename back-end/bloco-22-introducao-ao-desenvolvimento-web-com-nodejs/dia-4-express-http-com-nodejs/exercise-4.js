const express = require('express');
const app = express();

app.put('/user/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(201).json({
    message: `Seu nome é ${name} e você tem ${age} anos de idade`
  })
})

app.listen(3001, ()=> {
  console.log('Escutando a porta 3001');
})