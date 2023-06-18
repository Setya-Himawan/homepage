const { AuthService } = require('../services/auth-service');

const loginUser = async (req, res, next) => {
    const authService = new AuthService();

    try {
        console.log('masuk login controller');
        const user = await authService.login(req.body);
        console.log('keluar auth service');
        res.send(user);
    } catch (e) {
        next(e);
    }
}

module.exports = { loginUser };