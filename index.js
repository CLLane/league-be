const express = require("express");
const app = express();
const PORT = 1234;

app.get("/hello", async (req, res) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        'key': `${key}`,
      }
    };
    const response = await fetch('http://ddragon.leagueoflegends.com/cdn/10.8.1/data/en_US/champion.json?RGAPI-57c4ffe6-681a-4399-9d19-7597445455e9', options)
    if (!response.ok) {
      throw new Error('Crap!')
    }
    const result = await response.json();
    res.send(result.type)
  } catch (error) {
    throw new Error('Crap!!')
  }
  res.send("Hello World")
})

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
})