const joi = require('joi');

const createUserValidator = joi.object({
  email: joi.string().email().required(),
  name: joi.string().trim().required(),
  lastName: joi.string().trim().required(),
  password: joi.string().trim().required(),
  repeatPassword: joi.ref('password'),
});

const updateUserValidator = joi
  .object({
    email: joi.string().email(),
    name: joi.string().trim(),
    lastName: joi.string().trim(),
    password: joi.string().trim(),
    repeatPassword: joi.ref('password'),
  })
  .with('password', 'repeatPassword');

module.exports = {
  createUserValidator,
  updateUserValidator,
};
