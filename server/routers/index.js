const Router = require('express');
const router = new Router();

const callRequestRouter = require('./callRequestRouter');
const authRouter = require('./authRouter');

router.use('/callRequest', callRequestRouter);
router.use('/auth', authRouter);

module.exports = router;