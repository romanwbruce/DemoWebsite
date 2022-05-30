const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

  
app.listen(port);
console.log('Server started at ' + port);
