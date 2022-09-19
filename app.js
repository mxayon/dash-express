const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! |  Kamusta Mundo?");
});

app.listen(port, () => {
  console.log(`Experimental transmission listening on port ${port}`);
});
