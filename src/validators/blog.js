const joi = require('joi');

const schema = joi.object({
  title: joi.string().trim(),
  slug: joi.string(),
  published_at: joi.date().default(new Date()).required(),
  markdown: joi.string(),
  tags: joi.array().items(joi.string().trim().required()),
  categories: joi.array().items(joi.string().trim().required()),
});

module.exports = schema;
