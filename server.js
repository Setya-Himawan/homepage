const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const app = express();
const { db } = require("./connection");

app.set("view engine", "ejs");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post(
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
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        return res.render("register", { errors: errorMessages });
      }

      // Rest of your registration logic
      const userName = req.body.username;
      const email = req.body.email;
      const hashPassword = await bcrypt.hash(req.body.password, 10);

      const sqlQuery =
        "insert into user (username, email, password) values (?,?,?)";
      db.query(sqlQuery, [userName, email, hashPassword], (err, result) => {
        if (err) {
          console.log(err);
          res.redirect("/register");
        } else {
          res.redirect("/login");
        }
      });
    } catch (e) {
      console.log(e);
      res.redirect("/register");
    }
  }
);

app.get("/users", (req, res) => {
  const sqlQuery = "select * from user";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.listen(3000, () => {
  console.log("APP is running in port 3000");
});
