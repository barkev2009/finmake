const Router = require('express');
const router = new Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', [
    check('login', 'Не указан логин').notEmpty(),
    check('password', 'Не указан пароль').notEmpty(),
] , authController.login);
router.get('/', authMiddleware, authController.checkAuth);

module.exports = router;