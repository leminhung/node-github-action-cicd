const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;
const validatePassword = require("./test/validatePassword");

app.get("/", (req, res) => {
  res.send("Hello Node App");
});

app.post("/users", (req, res) => {
  const { username, password } = req.body;

  // Validate username, password, save user to database

  const validPassword = validatePassword(password);

  if (validPassword) {
    res.send({ message: "Valid User" });
  } else {
    res.send({ error: "Invalid Password" });
  }
});

app.listen(PORT, () => {
  console.log(`App listing port ${PORT}`);
});
