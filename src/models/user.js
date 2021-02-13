const { db } = require('../services');

const collection = db.get('users');

collection.createIndex('email', { unique: true });

module.exports = collection;
