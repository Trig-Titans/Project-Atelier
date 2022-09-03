const express = require('express');
const path = require('path');
const axios = require('axios');

var app = express();
var port = 3000;
//require('dotenv').config();

//middleware:
app.use(express.static(path.join(__dirname, '../client/public')))
app.use(express.json());

//requesthandlers:
app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(port);
console.log(`Listening at http://localhost:${port}`);