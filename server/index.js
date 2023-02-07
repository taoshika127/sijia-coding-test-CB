const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();
const {getAllBlogData, getBlogData, postBlogData, deleteBlogData, getAllTags, postTags, postNewBlogData} = require("./requestHandler.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/test', (req, res) => {
  res.send('hello');
});

app.get('/blogdata', getAllBlogData);

app.post('/blogdata', postNewBlogData);

app.get('/blogdata/:id', getBlogData);

app.post('/blogdata/:id', postBlogData);

app.post('/blogdata/:id', deleteBlogData);


app.get('/tags', getAllTags);

app.post('/tags', postTags);


app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

const PORT = process.env.port;
app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});