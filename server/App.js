const express = require("express");
const routes = require("./routes/index");
// require("./Books/books.model");
const db = require("./config/db");
const bodyParser = require("body-parser");
const app = express();
// app.use(express.static("client/public"));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
db.init();
routes.init(app);
app.get("*", (req, res) => {
  res.send("server up!");
});

const PORT = 5000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server successfully started!");
});
