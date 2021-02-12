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
app.use(express.json());

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.use('/api', router);
