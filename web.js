var express = require('express');
var fs = require('fs');
var index_content = fs.readFileSync('index.html');
var index_buffer = new Buffer(256);
index_buffer.write(index_content, "utf-8");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(index_buffer.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
