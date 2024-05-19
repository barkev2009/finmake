const { statuses } = require("../utils/consts")

module.exports = function (resp, status, message) {
    let statusCode;
    if (message === undefined) {
        message = {}
    }
    if (message.message !== undefined) {
        message.$message = message.message
    }
    message.message = status;
    switch (status) {
        case statuses.UNAUTHORIZED:
            statusCode = 401;
            break;
        case statuses.FORBIDDEN:
            statusCode = 403;
            break;
        case statuses.BAD_REQUEST:
            statusCode = 404;
            break;
        case statuses.INTERNAL:
            statusCode = 500;
            break;
        default:
            statusCode = 200;
            break;
    }
    return resp.status(statusCode).json(message)
}