const Router = require('express');
const router = new Router();
const callRequestController = require('../controllers/callRequestController');
const { check } = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', [
    check('phone_number', 'Не указано номер телефона пользователя').notEmpty(),
    check('name', 'Не указано имя пользователя').notEmpty()
] , callRequestController.create);
router.put('/:code', authMiddleware, callRequestController.edit);
router.delete('/:code', authMiddleware, callRequestController.delete);
router.get('/', authMiddleware, callRequestController.getAllCallRequests);
router.get('/:code', authMiddleware, callRequestController.getCallRequestByCode);

module.exports = router;