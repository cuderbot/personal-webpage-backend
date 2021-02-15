const joi = require('joi');

const schema = joi.object({
  slug: joi.string(),
  title: joi.string().trim().required(),
  content: joi.string(),
  tags: joi.array().items(joi.string().trim().required()),
  categories: joi.array().items(joi.string().trim().required()),
  published_at: joi.date().default(new Date()),
});

module.exports = schema;
