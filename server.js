const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;
// const testRoutes = require("./routes/testRoutes");
// const indexRoutes = require("./routes/indexRoutes");
// const loginRoutes = require("./routes/loginRoutes");

// const app = express();
app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.use("/", indexRoutes);
// app.use("/register", testRoutes);
// app.use("/login", loginRoutes);

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`App is running on port ${PORT}`);
// });
const userController = require("./controllers/user-controller");
const authController = require("./controllers/auth-controller");

// Sample route
app.get('/');
app.post('/register', userController.registerUser);
app.post('/login', authController.loginUser);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
