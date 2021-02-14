const { db } = require('../services');

const collection = db.get('blog');

module.exports = collection;
