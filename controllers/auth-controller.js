const { AuthService } = require("../services/auth-service");

class AuthController {
  constructor() {
    this.authService = new AuthService();
  }
  async register(req, res, next) {
    try {
      await this.authService.register(req.body);
      return res.redirect("/login");
    } catch (e) {
      next(e);
      return res.redirect("/register");
    }
  }
  async login(req, res) {
    try {
      await this.authService.authenticateUser(req, res);
      return res.redirect("/");
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = { AuthController };
