const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Node App");
});

app.listen(PORT, () => {
  console.log(`App listing port ${PORT}`);
});
