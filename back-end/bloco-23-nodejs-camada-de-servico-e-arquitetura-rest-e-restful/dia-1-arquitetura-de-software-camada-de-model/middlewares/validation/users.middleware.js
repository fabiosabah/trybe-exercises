const Joi = require('joi');

const usersDTO = Joi.object({
  firstName: Joi.string()
    .alphanum()  
    .min(3)
    .max(30)
    .required(),
  lastName: Joi.string()
    .alphanum()  
    .min(3)
    .max(30)
    .required(),
  email: Joi.string(),
  password: Joi.string()
    .min(6)
    .max(30)
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required()
  })
  .messages({
    "any.required": "O campo {{#label}} é obrigatório",
});

const validation = (req, res, next) => {
  const {error} = usersDTO.validate(req.body, {abortEarly: false});
  if(!error) return next();

  const messages = error.details.map(e => e.message);

  return res.status(400).json({
    error: "true",
    message: messages});
}


module.exports = validation;