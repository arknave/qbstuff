var scores = [0, 0],
  bteam = true,
  qnum = 0,
  n = 0,
  fin = true;

$.ajax({
  url: 'out.txt',
}).done(function(json){
  it = JSON.parse(json);
});

function handle(keyc){
  console.log(keyc);
  switch(keyc){
    //Team 1 +5
    case 87:
      scores[0] += 5;
      break;
    //Team 1 -5
    case 83:
      scores[0] -= 5;
      break;
    //Team 2 +5
    case 38:
      scores[1] += 5;
      break;
    // Team 2 -5
    case 40:
      scores[1] -= 5;
      break;
    // Switch LASA Teams
    case 79:
      $('#name2').text(bteam ? 'LASA A' : 'LASA B');
      bteam = !bteam; 
      break;
    // Start next tossup
    case 84:
      text = it[qnum].split(' ');
      qnum++;
      $('#text').text('');
      n = 0;
      break;
    // Next word 
    case 78:
      if(!text[n]) { break; }
      $('#text').text($('#text').text() +' '+  text[n]); 
      n++;
      break;
    /* Pause next tossup
    case 80:

      break;*/
    // Finish current tossup
    case 70:
      $('#text').text(text.join(' '));
      n = text.length;
      break;
  }
  update();
}

function update(){
  $('#score1').text(scores[0]);
  $('#score2').text(scores[1]);
}

window.onkeyup = function(e){
  handle(e.which);
}
