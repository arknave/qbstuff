var express = require('express'),
  path = require('path');
var app = express();

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.static(path.join(__dirname, 'public')));
});


app.get('/json', function(req, res){
  res.sendfile('out.txt');
});
app.get('/', function(req, res){
  res.sendfile('views/index.html');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
