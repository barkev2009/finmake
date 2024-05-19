const jwt = require('jsonwebtoken');

module.exports =  function (login) {
    let expiresIn = '5m';
    // if (role === 'ADMIN') {
    //     expiresIn = '1h';
    // }
    return jwt.sign(
        {
            login
        },
        process.env.SECRET_KEY,
        { expiresIn }
    )
}