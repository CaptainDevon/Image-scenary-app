const express = require("express");
const bodyParser = require("body-parser");
const connectToDb = require("./db");
const { signUp, login } = require("./Handlers");
const app = express();
const path = require("path");

const port = 4000;
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  // res.writeHead(200,{'Content-Type': 'text/html'})
  // res.writeHead(200,{'Content-Type': 'text/stylesheet'})
  res.sendFile(path.join(__dirname, "/login_page.html"));
});
app.get("/signUp", function (req, res) {
  // res.writeHead(200,{'Content-Type': 'text/html'})
  // res.writeHead(200,{'Content-Type': 'text/stylesheet'})
  res.sendFile(path.join(__dirname, "/signup_page.html"));
});
app.get("/home", function (req, res) {
    // res.writeHead(200,{'Content-Type': 'text/html'})
    // res.writeHead(200,{'Content-Type': 'text/stylesheet'})
    res.sendFile(path.join(__dirname, "/main.html"));
  });
app.post("/signUp", signUp);
app.post("/login", login);

connectToDb();
app.listen(port, (req, res) => {
  console.log(`listening on : http://localhost:${port}`);
});
