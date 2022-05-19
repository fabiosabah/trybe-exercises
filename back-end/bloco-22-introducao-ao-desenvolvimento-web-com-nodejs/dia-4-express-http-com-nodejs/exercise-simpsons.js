const express = require('express');
const app = express();
const { getSimpsons, setSimpsons} = require('./fs-utils');



app.get('/simpsons', async(req, res) => {
  try {
    const content = await getSimpsons();
    return res.status(200).json(content);
  } catch (error) {
    res.status(500).end();
  }
})

app.all('*', (_req, res) => {
  res.status(500).send('Internal Server Error');
} )

app.listen(3001, () => {
  console.log('Escutandoa na porta 3001');
})