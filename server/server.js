const express = require("express");
const app = express();
var cors = require("cors");

app.use(
  cors({
    credentials: true,
    // No need for this since this is the default
    // "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    origin: "http://localhost:1234",
  })
);

app.get("/data", (req, res) => {
  res.json({ location: "nowhere" });
});

app.put("/data", (req, res) => {
  res.json({ success: true });
});

app.listen(3000);
