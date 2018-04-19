const express = require("express")

const formidable = require('formidable')

const fs = require('fs');

const app = express()

const router = express.Router();

app.listen(8080, () => console.log("server listen on port 8080"))

app.use(express.static(__dirname));

router.get("/", (req, res) => {
  res.send("index")
})

router.get("/start", (req, res) => {
  res.send("start")
})

router.get("/upload", (req, res) => {
  res.render("upload.html")
})

router.post("/upload", (req,res) => {
  const form = new formidable.IncomingForm();
  res.send(form)
})

router.get("*", (req, res) => {
  res.render("index.html")
})

