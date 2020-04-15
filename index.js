const express = require("express");
const app = express();
const PORT = 1234;

app.listen(1234, () => {
  console.log(`Server is listening on port: ${PORT}`);
})

app.get("/hello", (req, res) => {
  res.send("Hello World")
})