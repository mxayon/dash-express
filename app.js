const express = require("express");
const app = express();
const port = 3000;

let burgers = ["Impossible Burger", "Hamburglar", "Cheezeburgers"];

let tacos = ["Taco Tuesday", "Soft Tacos", "Crispy Tacos"];

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World! |  Kamusta Mundo?");
});

app.get("/api/burgers", function (request, response) {
  response.json(burgers);
});

app.listen(port, () => {
  console.log(`Experimental transmission listening on port ${port}`);
});
