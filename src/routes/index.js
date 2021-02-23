const { Router } = require('express');

const userRouter = require('./user');

const router = Router();

module.exports = router;

router.use('/user', userRouter);
