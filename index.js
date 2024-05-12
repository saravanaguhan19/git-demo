const express = require("express");

const app = express();

app.get("/ping", (req, res) => {
  res.json({ msg: "ok from ping" });
});

app.listen("3000", () => {
  console.log("app started to listen to port 3000");
});
