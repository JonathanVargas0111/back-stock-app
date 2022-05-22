"use strict";

require('dotenv').config();

var PORT = process.env.PORT || 3000;

var express = require('express');

var app = express();
app.get('/', function (req, res) {
  res.status(200).send("<h1>Mini app</h1>");
});
app.listen(PORT, function () {
  console.log(PORT);
});