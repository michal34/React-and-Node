const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const user = req.body;
    const resposne = {
        success: false,
    };

    if (user.login === 'admin' && user.password === 'test123') {
        const token = jwt.sign({ user: 'admin' }, 'test123');

        resposne.success = true;
        resposne.token = token;
    }
    
    return res.status(200).json(resposne);
};

const checkSession = async (req, res) => {
    const token = req.body.token;
    const resposne = {
        success: false,
    };

    if (token) {
        const decoded = jwt.verify(token, 'test123');

        resposne.success = decoded.user === 'admin';
    }

    return res.status(200).json(resposne);
}

module.exports = {
    login,
    checkSession,
};