const Router = require('express');
const router = new Router();

const callRequestRouter = require('./callRequestRouter');

router.use('/callRequest', callRequestRouter);

module.exports = router;