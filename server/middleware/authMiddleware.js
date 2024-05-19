const jwt = require('jsonwebtoken');
const response = require('../error/response');
const { statuses } = require('../utils/consts');
const { getCookie } = require('../utils/cookies');

module.exports = function (req, resp, next) {
    if (req.method === 'OPTIONS') {
        next()
    }
    try {
        const cookies = getCookie(req);
        const token = cookies[process.env.COOKIE_TOKEN_NAME];
        if (!token) {
            return response(resp, statuses.FORBIDDEN, {payload: 'Не предоставлено токена авторизации'});
        }
        // const token = authorization.split(' ')[1] // Bearer TOKEN
        // if (!token) {
        //     return response(resp, statuses.UNAUTHORIZED, {payload: 'Не указан токен'});
        // }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded
        next()
    } catch (error) {
        return response(resp, statuses.FORBIDDEN, {payload: 'Неверный токен'});
    }
}