const express = require("express");
const router = express.Router();

const { AuthController } = require("../controllers/auth-controller");

// register
router.get("/register", (req, res) => {
  res.render("backend/register");
});
router.post("/register", (req, res, next) => {
  const authController = new AuthController();
  authController.register(req, res, next);
});

// login
router.get("/login", (req, res) => {
  res.render("backend/login");
});

router.post("/login", (req, res) => {
  const authController = new AuthController();
  authController.login(req, res);
});

// logout
router.get("/logout", (req, res) => {
  // Proses logout

  res.clearCookie("authToken");
  res.redirect("/login");
});
module.exports = router;
