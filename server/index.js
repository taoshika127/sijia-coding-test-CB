const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './dist')));

app.get('/test', (req, res) => {
  res.send('hello')
});

const PORT = process.env.port;
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});