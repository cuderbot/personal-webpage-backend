const { errorHandler } = require('./errorHandler');
const { notFound } = require('./notFound');
const { errorMongoose } = require('./errorMongoose');

module.exports = {
  errorHandler,
  errorMongoose,
  notFound,
};
