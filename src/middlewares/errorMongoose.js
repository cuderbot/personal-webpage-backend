const errorMongoose = (err, req, res, next) => {
  // Duplicate key code
  if (err.code === 11000) {
    next(new Error(`${Object.keys(err.keyPattern).toString()} duplicate`));
  }
  next();
};

exports.errorMongoose = errorMongoose;
