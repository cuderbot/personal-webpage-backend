require('dotenv/config');
const cors = require('cors');
const { Router } = require('express');
const express = require('express');

const router = require('./router');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', router);

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(
    `🚀 APP running on http://${process.env.HOST}:${process.env.PORT}`,
  );
});
