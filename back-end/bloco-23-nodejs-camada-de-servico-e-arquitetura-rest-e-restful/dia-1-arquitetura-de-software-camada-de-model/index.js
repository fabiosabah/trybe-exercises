const express = require('express');

const app = express();
app.use(express.json());

const usersMiddleware = require('./middlewares/validation/users.middleware');
const User = require('./model/Users')

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

