const { Router } = require('express');

const userRouter = require('./user');
const blogRouter = require('./blog');

const router = Router();

module.exports = router;

router.use('/user', userRouter);
router.use('/blog', blogRouter);
