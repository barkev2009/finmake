const Router = require('express');
const router = new Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator');

router.get('/', [
    check('login', 'Не указан логин').notEmpty(),
    check('password', 'Не указан пароль').notEmpty(),
] , authController.getToken);

module.exports = router;