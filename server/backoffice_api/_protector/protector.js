const jwt = require('jsonwebtoken');

const checkToken = (token) => {
    if (token) {
        const decoded = jwt.verify(token, 'test123');

        const isLogged = decoded.user === 'admin';

        return isLogged;
    }

    return false;
}


module.exports = {
    checkToken,
};