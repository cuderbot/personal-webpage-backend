const monk = require('monk');

const db = monk(process.env.MONGO_URI);

exports.db = db;
