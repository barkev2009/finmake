const Router = require('express');
const router = new Router();

const callRequestRouter = require('./callRequestRouter');
const authRouter = require('./authRouter');
const timerRouter = require('./timer.route');

router.use('/callRequest', callRequestRouter);
router.use('/auth', authRouter);
router.use('/timer', timerRouter);

module.exports = router;