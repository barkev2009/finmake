const Router = require('express');
const router = new Router();
const callRequestController = require('../controllers/callRequestController');
const { check } = require('express-validator');

router.post('/', [
    check('phone_number', 'Не указано номер телефона пользователя').notEmpty(),
    check('name', 'Не указано имя пользователя').notEmpty()
] , callRequestController.create);
router.put('/:code', callRequestController.edit);
router.delete('/:code', callRequestController.delete);
router.get('/', callRequestController.getAllCallRequests);
router.get('/:code', callRequestController.getCallRequestByCode);

module.exports = router;