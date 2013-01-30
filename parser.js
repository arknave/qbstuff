var fs = require('fs');

function parse(filename){
  fs.readFile(__dirname + '/' + filename, 'utf8', function(err, data){
    if (err) throw err;
    var lines = data.split("\n"),
      intup = false,
      fin = [],
      pos = 0,
      tup = {};
    for(line in lines){
      var cur = lines[line];
      var tossup = cur.match(/^(\s)?T?B?-?(\d{1,2})\.?\s?([^\r\n]+)/i);
      var answer = cur.match(/^[\s\w]*ANSWER[\s\w]*:?\s?([^\r\n]+)$/i);
      if(tossup !== null && tossup !== undefined){
        if(tup['txt']){
          fin[pos] = tup['txt'].trim();
          pos++;
          tup = {};
        }
        intup = true; 
      }
      if(answer !== null && answer !== undefined){
        intup = false;
      }
      if(intup){
        tup['txt'] = (tup['txt'] ? tup['txt'] : '') + ' ' + cur.trim();
      }
    }
    fin[pos] = tup['txt'].trim();
    fs.writeFile('out.txt', JSON.stringify(fin), function(err) {
      if(err){ throw err; }
      else {
        console.log('file saved');
      }
    });
  });
}

parse('packet.txt');
