var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.use(express.static(__dirname));

app.get('/', function(request, response) {
  var mybuf = fs.readFileSync("test.html");
  response.send(mybuf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
