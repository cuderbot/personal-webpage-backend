const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv/config');

const router = require('./router');
const middlewares = require('./middlewares');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api', router);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(
    `🚀 APP running on http://${process.env.HOST}:${process.env.PORT}`,
  );
});
