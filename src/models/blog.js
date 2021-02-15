const { db } = require('../services');

const collection = db.get('blog');

collection.createIndex('title', { unique: true });
collection.createIndex('slug', { unique: true });

module.exports = collection;
