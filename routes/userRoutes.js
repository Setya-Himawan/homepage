const express = require("express");
const router = express.Router();

const userController = require("../controllers/user-controller");

router.get("/user", userController.getUser);

// login
router.get("/register", (req, res) => {
  res.render("backend/register");
});
router.post("/register", userController.registerUser);

module.exports = router;
