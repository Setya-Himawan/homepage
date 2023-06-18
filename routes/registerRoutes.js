const express = require("express");
const { body } = require("express-validator");
const testController = require("../controllers/user-controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("register");
});

router.post(
  "/register",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  testController.registerUser
);

module.exports = router;
