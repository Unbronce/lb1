const express = require("express");

const formidable = require("formidable");
const path = require("path");

const fs = require("fs");

const app = express();
const sys = require("sys");

// app.use(express.static("./pages"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/index.html"));
});

app.get("/start", (req, res) => {
  res.sendFile(__dirname + "/pages/start.html");
});

app.get("/upload", (req, res) => {
  res.sendFile(__dirname + "/pages/upload.html");
});

app.post("/upload", (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = __dirname + "/uploadings";
  form.keepExtensions = true;
  const parsed = form.parse(req, function(err, fields, files) {
    res.sendFile(files.opensmt.path);
  });
  return;
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/index.html"));
});

app.listen(8080, () => console.log("server listen on port 8080"));
