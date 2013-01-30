var express = require('express'),
  path = require('path'),
  fs = require('fs'),
  tups = [];
var app = express();

fs.readFile('out.txt', function(err, data){
  if(err) throw err;
  tups = JSON.parse(data);
});

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/test', function(req, res){
  res.sendfile('views/tests.html');
});

app.get('/', function(req, res){
  res.sendfile('views/index.html');
});

app.get(/(\d{1,2})/, function(req, res){
  res.send(tups[parseInt(req.params[0])-1]);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
