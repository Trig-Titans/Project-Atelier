var express = require('express');
var app = express();

//middleware:
//app.use

//requesthandlers:
app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(process.env.PORT)