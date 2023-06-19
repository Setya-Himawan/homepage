const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth-controller");

// register
router.get("/register", (req, res) => {
  res.render("backend/register");
});
router.post("/register", authController.registerUser);

// login
router.get("/login", (req, res) => {
  res.render("backend/login");
});
router.post("/login", authController.loginUser);

module.exports = router;
