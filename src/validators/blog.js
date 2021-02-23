const joi = require('joi');

exports.createPostValidator = joi.object({
  slug: joi.string(),
  title: joi.string().trim().required(),
  content: joi.string(),
  tags: joi.array().items(joi.string().trim().required()),
  categories: joi.array().items(joi.string().trim().required()),
});

exports.updatePostValidator = joi.object({
  id: joi.string().trim().required(),
  slug: joi.string(),
  title: joi.string().trim().required(),
  content: joi.string(),
  tags: joi.array().items(joi.string().trim().required()),
  categories: joi.array().items(joi.string().trim().required()),
});

