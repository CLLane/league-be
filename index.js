const express = require("express");
const app = express();
const PORT = 1234;

app.get("/data", async (req, res) => {
  res.send("Hello World")
})

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
})