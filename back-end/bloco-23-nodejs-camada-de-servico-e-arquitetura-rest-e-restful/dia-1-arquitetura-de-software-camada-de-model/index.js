const express = require('express');

const app = express();
app.use(express.json());

const User = require('./model/Users')

app.get('/user', async (_req, res) => {
  try{
    const result = await User.getAll();

    res.status(200).json(result);
  } catch(e) {
    res.status(500).json({message: e.message});
  }
  
})

app.get('/user/:id', async(req, res) => {
  const { id } = req.params;

  try {
    const result  =  await User.getById(id);
    if(!result) return res.status(404).json({
      error: true,
      message: "Usuário não encontrado"
    })

    res.status(200).json(result);

  } catch (error) {
    res.status(400).json({message: error.message})
  }  


})


const usersMiddleware = require('./middlewares/validation/users.middleware');

app.post('/user',usersMiddleware, async (req, res) => {
  const {firstName, lastName, email, password} = req.body;
  try {
    const result =  await User.create(firstName, lastName, email, password);
    res.status(201).json(result);
    
  } catch (error) {
    res.status(400).json({
      error: "true",
      message: error.message,
    })
  }
})


const PORT = process.env.PORT || 3005
app.listen(PORT, () => {
  console.log('Escutando a porta ' + PORT);
})



// {
// 	"firstName": "Calebe",
// 	"lastName": "Junior",
// 	"email": "calebe.junior@gmail.com",
// 	"password": "d496d5ea2442"
// }

