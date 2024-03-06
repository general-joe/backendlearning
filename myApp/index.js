const express = require("express");
const app = express();

const name = "Joe";
const password = 123456;

//app.get(route, and a callback function)
//a call back function also needs two argument and that is req object and response object
app.get("/", (req, res) => {
  res.send("This is my home page");
});

app.use(loginMiddlewares);

app.get("/login", (req, res) => {
  res.send("This is my login page");
});

app.get("/feedback", (req, res) => {
  res.send("This is feed back page");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

function loginMiddlewares(req, res, next) {
  if (name == "Joe" && password == 1234567) {
    next();
  } else {
    res.send("Can not authenticate the user");
  }
}
