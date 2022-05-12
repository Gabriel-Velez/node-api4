const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>hi</h1>");
});

server.get("/node-env", (req, res) => {
  res.json({ env: process.env.NODE_ENV });
});

module.exports = server;
