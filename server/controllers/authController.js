const response = require('../error/response');
const { statuses } = require('../utils/consts');
const generateJWT = require('../utils/generateJWT');
const tryCatchWrapper = require('../utils/tryCatchWrapper');
const bcrypt = require('bcrypt');
const { encryptDecrypt } = require('../utils/xorer');

class AuthController {
    async login(req, res, next) {
        tryCatchWrapper(
            async () => {
                const errors = []
                let { login, password } = req.body;
                login = encryptDecrypt(login);
                password = encryptDecrypt(password);
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
                return response(res, statuses.SUCCESS, { token });
            },
            req, res, next, 'AuthController.getToken'
        )
    }

    async checkAuth(req, res, next) {
        tryCatchWrapper(
            async () => {
                const token = generateJWT(req.user.login);
                return response(res, statuses.SUCCESS, { token });
            }, req, res, next, 'AuthController.checkAuth'
        )
    }
}

module.exports = new AuthController();