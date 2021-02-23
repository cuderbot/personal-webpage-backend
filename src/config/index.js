const dotenv = require('dotenv');
const ip = require('ip');

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error("⚠️  Couldn't find config file ⚠️");
}

const createMongoURI = () => {
  const { MONGO_HOST, MONGO_PORT, MONGO_DB } = process.env;
  const host = MONGO_HOST || 'localhost';
  const port = MONGO_PORT || 27017;
  const db = MONGO_DB || 'personal-webpage';

  return `mongodb://${host}:${port}/${db}`;
};

const createConfigSchema = () => {
  const mongoURI = createMongoURI();

  return {
    env: process.env.NODE_ENV || 'development',
    server: {
      host: process.env.HOST || ip.address(),
      port: process.env.PORT || 3000,
    },
    mongoose: {
      uri: mongoURI,
      options: {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      },
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      algorithm: process.env.JWT_ALGORITHM || 'HS256',
    },
  };
};

module.exports = createConfigSchema();
