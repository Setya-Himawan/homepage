const express = require("express");
const cookieParser = require("cookie-parser");
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
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const authRouters = require("./routes/auth-routes");
const userRouters = require("./routes/user-routes");

app.use("/", authRouters);
app.use("/", userRouters);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
