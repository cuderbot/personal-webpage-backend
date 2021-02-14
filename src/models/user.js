const { db } = require('../services');

const collection = db.get('user');

collection.createIndex('email', { unique: true });

module.exports = collection;
