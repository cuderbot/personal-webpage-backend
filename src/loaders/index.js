const mongooseLoader = require('./mongoose');

exports.bootstrapLoader = async () => {
  await mongooseLoader();
};
