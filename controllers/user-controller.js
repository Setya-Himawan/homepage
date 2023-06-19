const { UserService } = require("../services/user-service");

// CRUD USER

const registerUser = async (req, res, next) => {
    const userService = new UserService();

    try {
        await userService.register(req.body);
        return res.redirect('/login');
    } catch (e) {
        next(e);
        return res.redirect('/register');
    }
};

module.exports = { registerUser };