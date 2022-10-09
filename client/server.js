const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.cookie("password", "p@ssw0rd");
  res.sendFile("index.html", { root: "." });
});

app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: "." });
});

app.listen(1234);
