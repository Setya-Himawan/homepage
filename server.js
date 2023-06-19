const express = require("express");
const bodyParser = require("body-parser");
const mustache = require("mustache-express");
const cors = require("cors");

const app = express();
const port = 3000;

app.engine("mustache", mustache());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const authRoutes = require("./routes/auth-routes");
const userRoutes = require("./routes/user-routes");

// Sample route
app.get("/", (req, res) => {
  res.render("index", { title: "Express with Mustache" });
});

app.use("/", userRoutes);
app.use("/", authRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
