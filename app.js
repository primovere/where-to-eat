const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.redirect("/where-to-eat");
});

app.get("/where-to-eat", (req, res) => {
  res.send("listing restaurants");
});

app.get("/where-to-eat/:id", (req, res) => {
  const id = req.params.id;
  res.send(`read restaurant: ${id}`);
});

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`);
});
