const { AuthService } = require("../services/auth-service");

const registerUser = async (req, res, next) => {
  const authService = new AuthService();

  try {
    await authService.register(req.body);
    return res.redirect("/login");
  } catch (e) {
    next(e);
    return res.redirect("/register");
  }
};

const loginUser = async (req, res, next) => {
  const authService = new AuthService();

  try {
    console.log("masuk login controller");
    const user = await authService.login(req.body);
    console.log("keluar auth service");
    console.log(user);
    res.send(user);
  } catch (e) {
    next(e);
  }
};

module.exports = { registerUser, loginUser };
