const { Router } = require('express');

const { userRouter } = require('./user');

const route = Router();

module.exports = route;

route.use('/user', userRouter);
