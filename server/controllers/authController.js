const response = require('../error/response');
const { statuses } = require('../utils/consts');
const generateJWT = require('../utils/generateJWT');
const tryCatchWrapper = require('../utils/tryCatchWrapper');
const bcrypt = require('bcrypt');

class AuthController {
    async getToken(req, res, next) {
        tryCatchWrapper(
            async () => {
                const errors = []
                const { login, password } = req.query;
                if (login !== process.env.ADMIN_LOGIN) {
                    errors.push('Неверный логин');
                }
                let comparePassword = bcrypt.compareSync(password, process.env.ADMIN_PASSWORD_HASH);
                if (!comparePassword) {
                    errors.push('Неверный пароль');
                }
                if (errors.length !== 0) {
                    return response(res, statuses.FORBIDDEN, { payload: errors });
                }

                const token = generateJWT(login);
                res.cookie(process.env.COOKIE_TOKEN_NAME, token, {expires: new Date(Date.now() + 1000 * 60 * 5)});
                return response(res, statuses.SUCCESS);
            },
            req, res, next, 'AuthController.getToken'
        )
    }
}

module.exports = new AuthController();