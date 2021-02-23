const { Router } = require('express');

const router = Router();

module.exports = router;

router.use('/user', require('./user'));
router.use('/blog', require('./blog'));
