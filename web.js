var express = require('express');
var fs = require('fs');
var index_content = fs.readFileSync('index.html');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(index_content.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
