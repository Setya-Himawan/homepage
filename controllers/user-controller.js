const { UserService } = require("../services/user-service");
const { connection } = require("../databases/connection");

// CRUD USER

const getUser = async (req, res, next) => {
  const userService = new UserService();
  try {
    const users = await userService.getUserService();
    return res.render("backend/home", { users: users });
  } catch (e) {
    console.log(e);
  }
};

const registerUser = async (req, res, next) => {
  const userService = new UserService();

  try {
    await userService.register(req.body);
    return res.redirect("/login");
  } catch (e) {
    next(e);
    return res.redirect("/register");
  }
};

module.exports = { registerUser, getUser };
