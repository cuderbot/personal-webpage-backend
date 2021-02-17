const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv/config');

const router = require('./routes');
const middlewares = require('./middlewares');

const app = express();

module.exports = app;

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(express.json());

app.use('/api', router);

app.use(middlewares.notFound);
app.use(middlewares.errorMongoose);
app.use(middlewares.errorHandler);
