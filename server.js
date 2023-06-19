const express = require("express");
const bodyParser = require("body-parser");
const mustache = require("mustache-express");
const cors = require("cors");

const app = express();
const port = 3000;

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const userController = require("./controllers/user-controller");
const authController = require("./controllers/auth-controller");

// Sample route
app.get('/', (req, res) => {
  res.render('index', { title: 'Express with Mustache' });
});

app.post('/register', userController.registerUser);
app.post('/login', authController.loginUser);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
