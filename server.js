const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
// const { body, validationResult } = require("express-validator");
// const bcrypt = require("bcrypt");
// const { db } = require("./connection");
app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const registerRoutes = require("./routes/registerRoutes");
const indexRoutes = require("./routes/indexRoutes");

app.use(express.static("public"));
app.use("/", indexRoutes);
app.use("/register", registerRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
