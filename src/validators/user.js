const joi = require('joi');

const createUserValidator = joi.object({
  email: joi.string().email().required(),
  author: joi.object({
    name: joi.string().trim().lowercase().required(),
    lastName: joi.string().trim().lowercase().required(),
    bio: joi.string().trim(),
  }),
  password: joi.string().trim().required(),
  repeatPassword: joi.ref('password'),
});

const updateUserValidator = joi
  .object({
    email: joi.string().email(),
    author: joi.object({
      name: joi.string().trim().lowercase(),
      lastName: joi.string().trim().lowercase(),
    }),
    password: joi.string().trim(),
    repeatPassword: joi.ref('password'),
  })
  .with('password', 'repeatPassword');

module.exports = {
  createUserValidator,
  updateUserValidator,
};
